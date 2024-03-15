const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); 
main()
  .then(() => {
    console.log("Connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats=[
  {
    from: "john",
    to: "emily",
    msg: "Can you please share the meeting agenda?",
    created_at: new Date()
  },
  {
    from: "sara",
    to: "mike",
    msg: "Reminder: Don't forget about the presentation tomorrow!",
    created_at: new Date()
  },
  {
    from: "alex",
    to: "jessica",
    msg: "Hey, could you send me the project proposal?",
    created_at: new Date()
  },
  {
    from: "david",
    to: "sophia",
    msg: "Do you have the latest financial report?",
    created_at: new Date()
  },
  {
    from: "ryan",
    to: "olivia",
    msg: "I need the updated client list for the month.",
    created_at: new Date()
  },
  {
    from: "lisa",
    to: "jason",
    msg: "Could you forward me the contract details?",
    created_at: new Date()
  },
  {
    from: "matt",
    to: "amanda",
    msg: "Can you send me the minutes of the last meeting?",
    created_at: new Date()
  },
  {
    from: "chris",
    to: "natalie",
    msg: "Reminder: Don't forget to submit your expense report.",
    created_at: new Date()
  },
  {
    from: "kevin",
    to: "hannah",
    msg: "Please share the updated project timeline.",
    created_at: new Date()
  },
  {
    from: "jacob",
    to: "mia",
    msg: "Hey, could you send me the product specifications?",
    created_at: new Date()
  }
];

Chat.insertMany(allChats);