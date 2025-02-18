import express from "express";
import cors from "cors";
import { db } from "@repo/db";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    await db.insert({

    })
    res.send("This is a POST signup endpoint")
});

app.post("/login", (req, res) => {
    res.send("This is a POST signup endpoint")
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});