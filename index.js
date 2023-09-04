const { ForgeClient } = require("forgescript")
const { ForgeQuickDB } = require("forgequickdb")

const client = new ForgeClient({
  extensions: [
        new ForgeQuickDB()
    ],
    
  intents: [
    "GuildMembers",
    "GuildMessages",
    "Guilds",
    "GuildPresences",
    "MessageContent" // This intent is privileged, must be whitelisted in dev portal, in your application.
  ],

  events: [
    "messageUpdate",
    "messageDelete",
    "guildMemberAdd",
    "guildMemberRemove",
    "userUpdate",
    "messageCreate",
    "ready"
  ], // Events our bot will act on

  prefixes: [
    "!",
    "?",
    "."
  ] // The prefixes to use for our bot!
  })

client.commands.load("./commands")
client.commands.add({
    name: "", // Not defining this creates a command that will be executed for every event fired of given type
    code: `$setStatus[online;Streaming;with $userCount users in $guildCount guilds;;https://twitch.tv/forgify]`,
    type: "ready" // The event to act on
})
client.commands.add({
    name: "forge", // Not defining this creates a command that will be executed for every event fired of given type
    code: `$if[$authorID==$botOwnerID;$eval[$message;true];$function[$addMessageReactions[$channelID;$messageID;❌]]]`,
    type: "messageCreate" // The event to act on
})
