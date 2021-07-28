# SimpleraidDiscord

if you want raid a discord server use this 

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Gua dah online anjir");
});

client.on("message", async message => {
  if (message.content === "P")
  if (message.content === "Halo")
message.channel.send("Yes")
message.channel.send("Why?")
  }
);
 client.login(process.env.BOT)

but you harus have a glitch.com for hosting your discord bot 

Put your Discord token application from https://discord.com/developers/applications
Add Your Token to .env in https://glitch.com 
Change Secret in .env to BOT 

Sorry For My Bad English 
