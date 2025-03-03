import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "@repo/db/client";
import { users } from "@repo/db/user";
import { projects } from "@repo/db/projects";

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

app.post("/projects", async (req, res) => {
  const { project_name } = req.body;
  const { url } = req.body;
  const { is_private } = req.body;

  //TODO: Add validation for project_name, url, and is_private
  const projectCreation = await db.insert(projects)
    .values({
      project_name: project_name,
      url: url,
      is_private: is_private
  }).returning();
})

app.get("/users", async (req, res) => {
  const result = await db.select()
      .from(user);

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
