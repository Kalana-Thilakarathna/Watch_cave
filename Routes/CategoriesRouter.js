import Express  from "express";
import * as categoriesController from "../Controllers/CategoriesController.js";
import { protect,admin} from "../middlewares/Auth.js";

const router = Express.Router();

router.get("/", categoriesController.getCategories);

router.post("/", protect, admin, categoriesController.createCategory);
router.put("/:id", protect, admin, categoriesController.updateCategory);
router.delete("/:id", protect, admin, categoriesController.deleteCategory);

export default router;
