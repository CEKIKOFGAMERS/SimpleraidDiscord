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
  if (message.content === "Assalamualaikum")
    message.channel.send("Waalaikumsalam");
  if (message.content === "P")
    message.channel.send("P terooos");
  if (message.content === "!rules")
    message.channel.send("Hi @everyone ini adalah rules yang harus kalian taati melanggar rules=Ban/kick dari server yang ke 1. jangan spam 2.jangan membuat kekacauan 3.toxic sewajarnya 4.kalau chat di tempat yang benar");
  if (message.content === "!admins")
 message.channel.send("Tidak ada admin on! dikarenakan Server Sedang maintenance :)");
  if (message.content === "Bot")
 message.channel.send("apa sayang?");
 if (message.content === "ih gay")
    message.channel.send("Wadoooo Elit banget");
 if (message.content === "Bacot")
   message.channel.send("yyyyy")
 if (message.content === "!players")
 message.channel.send ("0 Player Yang ON di MGRP!")
 if (message.content === "dih baperan")
  message.channel.send("Ngapa gasuka ha?")
if (message.content === "@everyone")
 message.channel.send("jangan tag everyone ajg")
if (message.content === "Channel CEKIKOFGAMERS")
message.channel.send("https://www.youtube.com/channel/UCAGkXOS2yMfIW8FTdFk8MvA")
if (message.content === "akun meme")
 message.channel.send("https://www.instagram.com/meme_cringe.3gp/")
if (message.content === "akun mgrp")
 message.channel.send("https://www.instagram.com/metrogamersroleplay.id/");
if (message.content === "!-help")
 message.channel.send("!admins for check admin on duty !player for check player in game !rules for helping you for rules this server !prefix for custom prefix!")
if (message.content === "KKTBSYS")
  message.channel.send("Menurut Dari Google KKTBSYS adalah Kata Kata Yang Diucapkan Pak Soeharto Kenapa kamu tanya begitu ha? siapa yang suruh btw bentar depan rumah mimin ada bakso mondar mandir bye")
if (message.content === "YNTKTS")
 message.channel.send("Menurut Wikipedia YNTKTS adalah Yo Ndak Tau Kok Tanya Saya Kata Tersebut adalah kata kata yang disebutkan pak jokowi")
if (message.content === "GAKR")
 message.channel.send("Menurut Wikipedia GAKR adalah Gitu Aja kok repot Kata tersebut diucapkan oleh mantan presiden Pak Gusdur")
if (message.content === "Yamete Kudasai")
 message.channel.send("Lariii ada wibu")
if (message.content === "kawaii")
 message.channel.send(">////<")
if (message.content === "Bot Wibu")
 message.channel.send("Ngapa Gasuka? Gelud kita ajg")
if (message.content ==="./kick kelvin")
 message.channel.send("Player ini sudah dikeluarkan oleh @LoliHunter#4646")
if (message.content === "!prefix")
 message.channel.send("This Bot Not Support Prefix!")
if (message.content === "Halo")
 message.channel.send("apa?")
if (message.content === "IP samp")
message.channel.send("91.121.87.14:6614")
if (message.content === "gpp")
 message.channel.send("apa sayang gausah sedih ihh")
if (message.content === "ih apasih kamu")
 message.channel.send("kamu mau seblak?")
if (message.content === "mau")
 message.channel.send("tuhkan kwkwkw")
if (message.content === "IP mc")
 message.channel.send("metrogamers.aternos.me")
if (message.content === "mgrp")
message.channel.send(":mgrp:")
  }
);
 client.login(process.env.BOT)