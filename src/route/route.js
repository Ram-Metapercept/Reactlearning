const express=require("express")
const router=express.Router()
const {addTask,getTask,updateTask,deleteTask}=require("../controller/taskController")

router.post("/create",addTask)

router.get("/getTask",getTask)
router.put("/updateTask",updateTask)
router.delete("/deleteTask",deleteTask)



module.exports = router;
