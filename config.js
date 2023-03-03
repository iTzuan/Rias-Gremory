require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "919529426293";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://RedzeoX:S4y.Sco7ch@itachi.6bpoybj.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ`;
global.author = process.env.AUTHOR || "ꜱᴀʏ.ꜱᴄᴏᴛᴄʜ 💔";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: `You are *Banned* fron using commands!  \n\nType *${prefa}owner* or *${prefa}support* to submit a request to unban yourself !`,
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};

