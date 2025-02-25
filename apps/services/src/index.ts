import express from "express";
import cors from "cors";
import "dotenv/config";
import { db } from "@repo/db";
import { userTable } from "@repo/db/schema";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
console.log("DATABSE_URL is: ", process.env.DATABASE_URL);

//^ TODO: database connection is failing - fix this
//^ TODO: port mapping config failing - fix this 

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email: string = req.body.email;
  const password: string = req.body.password;

  //TODO: implement input validation with zod schema for users
  // const user = await db.insert(userTable)
  //   .values({
  //     name,
  //     email,
  //     password,
  //   })
  //   .returning();
  const result = await db.select()
      .from(userTable);
  console.log(result);
  //TODO: hash the password and create the first user (or)
  //TODO: integrate better-auth library for auth

  res.status(200).json({
    result
  });
});

app.post("/login", (req, res) => {
  res.send("This is a POST signup endpoint");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
