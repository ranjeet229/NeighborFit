import express from 'express'
import { matchNeighborhoodById } from '../controllers/matchController.js';


const router = express.Router()

// POST /api/v2/match
router.route("/:id").get(matchNeighborhoodById);
export default router
