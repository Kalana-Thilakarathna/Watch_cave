import express  from "express";
import { protect,admin} from "../middlewares/Auth.js";
import * as moviesController from "../Controllers/MoviesController.js";
import { get } from "mongoose";

const router = express.Router();

router.post("/import",moviesController.importMovies);
router.get("/", moviesController.getMovies)
router.get("/:id", moviesController.getMovieById)
router.get("/rated/top", moviesController.getTopRatedMovies)
router.get("/random/all", moviesController.getRandomMovies)

router.post("/:id/reviewss",protect,admin,moviesController.createMovieReview)

router.put("/:id",protect,admin,moviesController.updateMovie)

router.delete("/:id",protect,admin,moviesController.deleteMovie)
router.delete("/",protect,admin,moviesController.deleteAllMovies)

router.post('/',protect,admin,moviesController.createAMovie)


export default router;