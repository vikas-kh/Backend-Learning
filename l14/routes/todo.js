import express from "express";
import { createTodo ,getAllTodos,updateTodo, deleteTodo} from "../contraollers/todo.js";
const router=express.Router();

router.route("/todo").post(createTodo).get(getAllTodos);
router.route("/:todoId").put(updateTodo).delete(deleteTodo);
export default router;  