const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://hunghoang1:12345678!@cluster0.0mgjk.mongodb.net/keeperDB?retryWrites=true&w=majority", {
    useNewUrlParser: true
    // useUnifiedTopology: true
})

const noteSchema = {
    title: String,
    content: String
}

const Keeper = mongoose.model("Keeper", noteSchema)

app.get("/", (req, res)=>{
    Keeper.find((err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log("get request succeed")
        }
    })
})

app.post(("/"), (req, res)=>{
    const newNote = new Keeper({
        title: req.body.title,
        content: req.body.content
    })
    newNote.save();
})

app.delete("/:id" , (req, res)=>{
    Keeper.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Success")
        }
    })
})
// app.put("/update/:id" , (req, res)=>{
//       Keeper.updateOne({title: req.params.id}, 
//         {title: req.body.title, content: req.body.content}, 
//         {overwrite: true},
//         (err)=>{
//           if(err){
//             console.log("is err")
//           }else{
//             console.log("success")
//           }
//         })
//     }
//   )

  app.patch("/update/:id",
    (req, res)=>{
      Keeper.updateOne({_id: req.params.id}, 
        {$set: req.body}, 
        (err)=>{
          if(err){
            res.send("is err")
          }else{
            res.send("success")
          }
        })
    }
  )
app.listen(process.env.PORT || 9000, (req, res)=>{
    console.log("server is running")
})