const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3001;
const path = require("path");
const methodOverride=require("method-override");
const Chat = require("./models/chat.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
main()
  .then(() => {
    console.log("Connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
/**
 * let Chat1=new Chat({
from:"neha",
to:"vikas",
msg:"send me your ans book",
created_at:new Date()

})
Chat1.save().then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
})
 * 
 */

app.get("/", (req, res) => {
  res.send("working");
});

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

//new Chat

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat.save().then((res)=>{
    console.log("chat was saved");
  }).catch((err)=>{
console.log(err);
  })
  console.log(newChat);
  res.redirect("/chats");
});

//Edit
app.get("/chats/:id/edit",async(req,res)=>{
  let {id}=req.params;
  let chat= await Chat.findById(id);
  res.render("edit.ejs",{chat})
})

//Update route

app.put("/chats/:id", async(req,res)=>{
  let {id}=req.params;
  let {msg:newMsg}=req.body;
  console.log(newMsg);
  let updatedChat= await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true}
    );

  console.log(updatedChat);
  res.redirect("/chats")
})










app.listen(port, (req, res) => {
  console.log(`server running port number ${port}`);
});
