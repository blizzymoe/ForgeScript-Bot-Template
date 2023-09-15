module.exports = {
    name: "bot",
    type: "messageCreate",
    aliases: ["botinfo", "binfo", "boti"],
    code: `$author[Bot Info;$userAvatar[$botID]]
$description[**Uptime:** \`$parseMS[$uptime;2;;true]\`
**Guilds:** \`$guildCount\`
**Users:** \`$userCount\`;1]

$description[**Version:**
**ForgeScript:** \`v$version\`
**Node.JS:** \`$nodeVersion\`;2]

$description[**Memory Stats:** **Usage:** \`$floor[$ram]MB\`
**Free:** \`$cropText[$divide[$djsEval[require("os").freemem()];1073741824];0;2]GB\`
**Total:** \`$cropText[$divide[$djsEval[require("os").totalmem()];1073741824];0;2]GB\`;3]

$description[**System Stats:**
**Usage:** \`$math[$cpu/100]%\`
**Cores:** \`$djsEval[require("os").cpus().length]\`
**OS:** \`$djsEval[require("os").type()] $djsEval[require("os").release()] $djsEval[require("os").arch()]\`;4]

$color[FFFFFF]
$color[FFFFFF;2]
$color[FFFFFF;3]
$color[FFFFFF;4]

$footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID];4]`
}
