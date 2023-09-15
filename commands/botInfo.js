module.exports = {
    name: "bot",
    type: "messageCreate",
    aliases: ["botinfo", "binfo", "boti"],
    code: `$author[Bot Info;$userAvatar[$botID]]
$description[**Uptime:** \`$parseMS[$uptime;2;;true]\`
**ForgeScript:** \`v$version\`
**Node.JS:** \`$nodeVersion\`
**RAM:** \`$floor[$ram]MB\`
**CPU:** \`$math[$cpu/100]%\`
**Guilds:** \`$guildCount\`
**Users:** \`$userCount\`]
$color[FFFFFF]
$footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]`
}
