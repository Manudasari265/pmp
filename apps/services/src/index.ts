import express from "express";
import cors from "cors";
import { db } from "@repo/db";
import { userTable } from "@repo/db/schema";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

//^ TODO: database connection is failing - fix this
//^ TODO: port mapping config failing - fix this 

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email: string = req.body.email;
  const password: string = req.body.password;

  //TODO: implement input validation with zod schema for users
  const user = await db.insert(userTable)
    .values({
      name,
      email,
      password,
    })
    .returning();
  //TODO: hash the password and create the first user (or)
  //TODO: integrate better-auth library for auth

  res.send("This is a POST signup endpoint");
});

app.post("/login", (req, res) => {
  res.send("This is a POST signup endpoint");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
