const {Task}=require("../db/config")

// exports {
//     addTask
// }

function addTask(req,res){
  console.log("1234")  
    // try{
    // let data=req.body
    //     console.log(data)

    // // await Task.set(data)
    // // res.send({msg:"successfull"})
    // }catch (error) {
    //     console.log("This is the error :", error.message)
    //     return res.status(500).send({ msg: "Error", error: error.message })
    // }

}

// exports.getTask=async function (req,res){
//     console.log("1234")  
//       try{
//       data=req.body
  
  
//      let fetchedData= await Task.get()
//      return res.status(200).send({ status: "true", message: "Success", data: fetchedData })
//       }catch (error) {
//           console.log("This is the error :", error.message)
//           return res.status(500).send({ msg: "Error", error: error.message })
//       }
  
//   }

//   exports.updateTask=async function (req,res){
//     console.log("1234")  
//       try{
//       data=req.body
  
  
//      let fetchedData= await Task.get()
//      return res.status(200).send({ status: "true", message: "Success", data: fetchedData })
//       }catch (error) {
//           console.log("This is the error :", error.message)
//           return res.status(500).send({ msg: "Error", error: error.message })
//       }
  
//   }