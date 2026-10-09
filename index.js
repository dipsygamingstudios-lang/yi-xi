
const { Client, GatewayIntentBits } = require("discord.js");

const RULES_CHANNEL_ID = "1558230473480601721";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", () => {
    console.log(`Yi Xi is online as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (!message.guild) return;
    if (message.channelId !== RULES_CHANNEL_ID) return;
    if (message.author.bot) return;
    if (message.webhookId) return;

    try {
        await message.delete();
    } catch (error) {
        console.error("Could not delete message:", error.message);
    }
});

client.login(process.env.DISCORD_TOKEN);
