import express from "express";
import {
	createItem,
	getAllItems,
	getItemById,
	updateItem,
	deleteItem,
} from "../controllers/itemController";
import passport from "passport";

const router = express.Router();

router.post("/", passport.authenticate("jwt", { session: false }), createItem);

router.get("/", passport.authenticate("jwt", { session: false }), getAllItems);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	getItemById
);

router.put(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	updateItem
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	deleteItem
);

export default router;
