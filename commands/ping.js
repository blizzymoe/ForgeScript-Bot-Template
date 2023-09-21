module.exports = {
    name: "ping",
    type: "messageCreate",
    code: `$let[msg;$sendMessage[$channelID;$description[Checking client latency...]
$color[FFFFFF];true]]
$let[1st;$ping]
$wait[1000]
$function[$editMessage[$channelID;$get[msg];$title[🏓 | Pong!]
$description[**Client Latency:** \`$get[1st]ms\`
**Roundtrip:** \`$math[$executionTime-1000]ms\`]
$color[FFFFFF]]]`
}
