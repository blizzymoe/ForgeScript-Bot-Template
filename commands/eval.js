module.exports = {
	name: "eval", // Not defining this creates a command that will be executed for every event fired of given type
    code: `$if[$authorID==$botOwnerID;
$eval[$message;true]
$function[$addMessageReactions[$channelID;$messageID;✅]];$function[$addMessageReactions[$channelID;$messageID;❎]]]`,
    type: "messageCreate" // The event to act on
}
