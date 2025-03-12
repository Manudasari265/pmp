import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "@repo/db/client";
import { users } from "@repo/db/user";
import { ZodError } from "zod";
import { projects } from "@repo/db/projects";
import { ProjectValidationSchema } from "@repo/types/projectInputValidation";
import { ProjectInferType } from "@repo/types/projectInputValidation";
import authMiddleware from "@repo/auth/authMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//^ For the time being this endpoint is temporary/optional
//^ Clerk to db syncing needs to be done via webhooks
app.post("/signup", async (req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  const userCreation = await db.insert(users)
       .values({
          username,
          email,
          password
       })
       .returning();

  if(!userCreation) {
    res.status(500).json({
      message: "User creation failed!"
    });
    return;
  }

  res.status(200).json({
    message: "User created successfully!!"
  });
})

app.post("/projects", async (req: Request<{}, {}, ProjectInferType>, res: Response) => {
  try {
    const parsedBody = ProjectValidationSchema.safeParse(req.body);

    if(!parsedBody.success) {
      res.status(400).json({
        message: "Input credentials incorrect!",
        error: parsedBody.error.format()
      });
      return;
    }

    const userId = req.userId;
    if(!userId) {
      res.status(401).json({
        message: "User unauthorized",
        error: "Wrong user session"
      })
      return;
    }

    //TODO: Install Svix for integrating webhooks 
    //TODO: Add a sep route for clerk webhook
    //TODO: Test the 1st user's project creation
    const newProjectForUser = await db.insert(projects)
      .values({
       ...parsedBody.data,
       authorId: userId,
    })
    .returning();

    if(!newProjectForUser) {
      res.status(404).json({
        message: "Internal server error",
      })
      return;
    }

    res.status(201).json({
      message: "New project roadmap successfully created",
      project: newProjectForUser
    })
  } catch (error) {
    if(error instanceof ZodError) {
      res.status(400).json({
        error: error.format()
      });
    }
    console.error("Error in /projects endpoint: ", error);
    
    res.status(500).json({
      message: "PmP creation failed!",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

app.get("/users", async (req, res) => {
  const result = await db.select()
      .from(users);

  console.log("Getting all users from database: ", result);

  res.status(200).json({
    message: "Users fetched successfully",
    result
  })
})

app.post("/login", (req, res) => {
  res.send("This is a POST signup endpoint");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
