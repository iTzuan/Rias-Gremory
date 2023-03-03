module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "📌",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`🍃Check your DM *${pushName}* Senpai !\n\n✨I have sent you support group link personally.`)
        let botpic = botImage1
        let txt = `      🧣 *Support Group* 🧣\n\n*${botName}* 🐰is an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* 🐷Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*🍑Thanks for using Rias Gremory.*`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
