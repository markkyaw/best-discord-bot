const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "~";

// Runs on message event, takes message as paraemter
client.on("message", function (message) {
  // Checks if author is a bot, don't process if it's from bot
  if (message.author.bot) return;
  // ignores messages that aren't prefix
  if (!message.content.startsWith(prefix)) return;

  // remove prefix from message content
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Latency: ${timeTaken}ms.`);
  }
});

client.login(config.BOT_TOKEN);
