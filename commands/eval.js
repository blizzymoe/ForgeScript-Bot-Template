module.exports = {
	name: "eval", // Not defining this creates a command that will be executed for every event fired of given type
    aliases: ["ev", "execute", "exec"],
    code: `$if[$authorID==$botOwnerID;
$eval[$message;true]
$try[$function[$addMessageReactions[$channelID;$messageID;✅]]]]`,
    type: "messageCreate", // The event to act on
    unprefixed: false // Set to true to make the command work without prefix.
}
