const { ForgeClient } = require("forgescript")
const { ForgeQuickDB } = require("forgequickdb")

const client = new ForgeClient({
  extensions: [
        new ForgeQuickDB()
    ],
    
  intents: [
    "DirectMessages",
    "GuildMessages",
    "Guilds",
    "MessageContent" // This intent is privileged, must be whitelisted in dev portal, in your application.
  ],

  events: [
    "messageCreate",
    "ready"
  ], // Events our bot will act on

  prefixes: [
    "!",
    "?"
  ] // The prefixes to use for our bot!
  useInviteSystem: true
  })

client.commands.load("./commands")
client.login("bot_token") // You can get your bot token on https://discord.com/developers/applications
