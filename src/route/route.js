const express=require("express")
const router=express.Router()
const newTask=require("../controller/taskController")

router.post("/create",(req,res)=>{
    console.log("test")
})

// router.get("/getTask",getTask)
// router.put("updateTask",updateTask)
// router.delete("/deleteTask",deleteTask)



module.exports = router;
