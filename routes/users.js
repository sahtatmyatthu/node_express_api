import express from "express";

const router = express.Router();

import {
  createUser,
  getUsers,
  getUser,
  deletUser,
  updateUser,
} from "../controllers/users.js";



// all routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

// /users/2 => req.params {id: 2}
router.get("/:id", getUser);

router.delete("/:id", deletUser);

router.patch("/:id", updateUser);

export default router;
