// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame ("OMM")
 
});




// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '?avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('message', msg => {
  if (msg.content === '?ping') {
    msg.reply('pong!');
  }
});

client.on('message', msg => {
  if (msg.content === '?invite') {
    msg.reply('https://discord.gg/Dg8b53f');
  }
});

client.on('message', msg => {
  if (msg.content === '.idk') {
    msg.reply('.idk');
  }
});

client.on('message', msg => {
  if (msg.content === '?owner2') {
    message.channel.send('go look dick face');
  }
});

client.on('message', msg => {
  if (msg.content === '?love2') {
    msg.reply('love is not real ');
  }
});

//const a167_0x370f=['./commands.js']

//client.on('message' , msg => {
 // if (msg.content === '?help'){
  // msg.reply('go help your self fucker');
  // console.log('success')
 // }
//});

client.on('message' , msg => {
  if (msg.content === '?afk'){
    msg.reply('nobody cares');
    console.log('someone went afk')
  }
});




client.on('message', msg => {
  if (msg.content === '?suicide') {
    msg.reply('well id tell yo how to go lights out but its against discords tos anyways get help CALL 1-800-273-8255 or Text SAFE TO 741-741')
    msg.reply('https://www.youtube.com/watch?v=VJe6LLoGgR8')
   msg.reply('well id tell yo how to go lights out but its against discords tos anyways get help CALL 1-800-273-8255 or Text SAFE TO 741-741')
    msg.reply('https://www.youtube.com/watch?v=VJe6LLoGgR8')
     msg.reply('well id tell yo how to go lights out but its against discords tos anyways get help CALL 1-800-273-8255 or Text SAFE TO 741-741')
    msg.reply('https://www.youtube.com/watch?v=VJe6LLoGgR8')
    console.log('help')
    console.log()
    
    ;
  }
});


//client.change_presence(activity=discord.Game(name='You'))

// or, for watching:
//activity = discord.Activity(name='my activity', type=discord.ActivityType.watching)
//client.change_presence(activity=activity)


//load the commands ?









//$.getScript("help.js")








// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);


console.log('success 2')


module.exports = {
	name: 'pingtest',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};