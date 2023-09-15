module.exports = {
    name: "updatecmnd",
    aliases: ["update", "cmnd", "up"],
    type: "messageCreate",
    code: `$if[$authorID==$botOwnerID;
        $updateCommands
        $$function[$addMessageReactions[$channelID;$messageID;✅]]
        ]`
}
