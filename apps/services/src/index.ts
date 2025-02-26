import express from "express";
import cors from "cors";
import { db } from "@repo/db/client";
import { user } from "@repo/db/user";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

//^ TODO: database connection is failing - fix this
//^ TODO: port mapping config failing - fix this 

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email: string = req.body.email;
  const password: string = req.body.password;

  //TODO: implement input validation with zod schema for users
  const users = await db.insert(user)
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
