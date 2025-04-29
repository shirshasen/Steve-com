import express from "express";
import configRoutes from "./backend/routes/index.js";

const app = express();
app.use(express.json());

app.use("/", configRoutes); // ✅ Mount all your routes

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
