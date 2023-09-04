module.exports = {
    name: "server",
    type: "messageCreate",
    code: `$color[643AF4]
$thumbnail[$guildIcon]
$title[Server Information]
$description[**Name:** \`$guildName\`
**ID:** \`$guildID\`
**Owner:** <@$guildOwnerID> (\`$guildOwnerID\`)
**Created:** <t:$floor[$divide[$guildCreatedAt;1000]]:R>
**Bot Joined:** <t:$floor[$divide[$memberJoinedAt[$guildID;$botID];1000]]:R>
**Boosts:** \`$guildBoostCount\` (\`$guildBoostLevel\`)
**Members:** \`$guildMemberCount\` (\`$guildBotCount Bots\`)
**Channels:** \`$guildChannelCount\`
**Roles:** \`$guildRoleCount\`
**Emojis:** \`$guildEmojiCount\`]
$footer[Requested by $username;$userAvatar]`
}
