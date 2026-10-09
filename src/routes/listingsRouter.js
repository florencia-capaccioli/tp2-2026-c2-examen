import express from "express";
import { getAllListings, getListingId, getListingsPropertyTypeController, getPropertyHostController } from "../controllers/listingsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", authMiddleware, getAllListings);
router.get("/:id", authMiddleware, getListingId);
router.get("/property-type/:type", authMiddleware, getListingsPropertyTypeController);
router.get("/host/:host_id", authMiddleware, getPropertyHostController);
export default router;
