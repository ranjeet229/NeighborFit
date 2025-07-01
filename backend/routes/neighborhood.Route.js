
import express from "express";

import { createNeighborhood, getNeighborhoodById } from "../controllers/neighborhoodController.js";

const router = express.Router()

router.route("/add").post(createNeighborhood);
router.route("/:id").get(getNeighborhoodById);

export default router