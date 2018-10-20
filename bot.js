const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
تريد شراء نايترو؟ تريد شراء حسابات ماين كرافت؟
اي شئ تريده هو هنا !!!
جيف اواي علي مليون كريدت قريبآآ
                               [ https://discord.gg/abNrwmA ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
