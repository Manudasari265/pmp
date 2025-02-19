import express from "express";
import cors from "cors";
import { db } from "@repo/db/client";
import { user } from "@repo/db/user"; 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    // const newUser = await db.insert(user)
    //   .values({
    //     email,
    //     password
    //   })
    //TODO: implement input validation with zod schema for users
    //TODO: hash the password and create the first user (or)
    //TODO: integrate better-auth library for auth 
    
    res.send("This is a POST signup endpoint")
});

app.post("/login", (req, res) => {
    res.send("This is a POST signup endpoint")
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});