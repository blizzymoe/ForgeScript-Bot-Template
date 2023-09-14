const { ForgeClient } = require("forgescript")
const { ForgeQuickDB } = require("forgequickdb")
const { token } = require("./config.json")
const { mkdirSync, existsSync } = require("node:fs")
const path = "./commands"
if (!existsSync(path)) mkdirSync(path, { recursive: true })

const client = new ForgeClient({
  extensions: [
    new ForgeQuickDB()
  ],

  intents: [
    "Guilds",
    "GuildMembers",
    "GuildModeration",
    "GuildEmojisAndStickers",
    "GuildIntegrations",
    "GuildWebhooks",
    "GuildInvites",
    "GuildVoiceStates",
    "GuildPresences",
    "GuildMessages",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "DirectMessages",
    "DirectMessageReactions",
    "DirectMessageTyping",
    "MessageContent",
    "GuildScheduledEvents",
    "AutoModerationConfiguration",
    "AutoModerationExecution" // This intent is privileged, must be enabled in https://discord.com/developers/applications
  ],
  events: [
    "channelCreate",
    "channelDelete",
    "channelUpdate",
    "debug",
    "emojiCreate",
    "emojiDelete",
    "emojiUpdate",
    "error",
    "guildAuditLogEntryCreate",
    "guildCreate",
    "guildDelete",
    "guildMemberAdd",
    "guildMemberRemove",
    "guildMemberUpdate",
    "guildUpdate",
    "interactionCreate",
    "inviteCreate",
    "inviteDelete",
    "messageCreate",
    "messageDelete",
    "messageReactionAdd",
    "messageReactionRemove",
    "messageUpdate",
    "ready",
    "roleCreate",
    "roleDelete",
    "roleUpdate",
    "shardDisconnect",
    "shardError",
    "shardReady",
    "shardReconnecting",
    "shardResume",
    "userUpdate",
    "voiceStateUpdate"
  ], // Events our bot will act on

  prefixes: [
    "!",
    "?"
  ], // The prefixes to use for our bot!
  useInviteSystem: false // Set to `true` if you want to use invite system.
})

client.commands.load("./commands") // Load commands from a folder.
console.log("Commands has been loaded successfully!")
client.login(token) // You can get your bot token on https://discord.com/developers/applications