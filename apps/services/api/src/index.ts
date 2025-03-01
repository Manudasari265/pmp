import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "@repo/db/client";
import { users } from "@repo/db/user";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//^ TODO: database connection is failing - fix this
//^ TODO: port mapping config failing - fix this 

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email: string = req.body.email;
  const password: string = req.body.password;

  //TODO: implement input validation with zod schema for users
  const usersData = await db.insert(users)
    .values({
      username,
      email,
      password,
    })
    .returning();
  //TODO: hash the password and create the first user (or)
  //TODO: integrate better-auth library for auth

  res.status(200).json({
    message: "User Signup successful"
  });
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
