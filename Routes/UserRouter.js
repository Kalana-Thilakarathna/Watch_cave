import express  from "express";
import { registerUser, updateUserProfile, deleteUserProfile, changePassword, getLikedMovies, addLikedMovie, deleteLikedMovie,
    getUsers,deleteUser
} from "../Controllers/UserController.js";
import { loginUser } from "../Controllers/UserController.js";
import { protect,admin} from "../middlewares/Auth.js";

const router = express.Router();

router.post("/",registerUser);
router.post("/login",loginUser);

router.put("/", protect , updateUserProfile);
router.delete("/", protect , deleteUserProfile)

router.put("/password",protect,changePassword)
router.get("/favorites",protect, getLikedMovies)
router.post("/favorites",protect, addLikedMovie)
router.delete("/favorites",protect, deleteLikedMovie)

router.get("/",protect,admin,getUsers)
router.delete("/:id",protect,admin,deleteUser)

export default router;