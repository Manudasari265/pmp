import express from "express";
import { toNodeHandler } from "better-auth";
import { auth } from "./lib/auth.js";

const app = express();
const PORT = 8000;

app.all("/api/auth", toNodeHandler(auth.handler));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Better Auth app is listening on port ${PORT}`);
})