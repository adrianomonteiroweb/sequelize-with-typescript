import express from "express";

const router = express.Router();

router.post("/users");

router.get("/users");

router.get("/user/:id");

router.put("/user/:id");

router.delete("/user/:id");

export default router;
