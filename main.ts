import {Client, GatewayIntentBits, MessagePayload, User} from 'discord.js';
import axios from "axios";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
  console.log("Connected!");
});

client.on('messageCreate', async (e) => {
  if (e.author.bot) {
    return;
  }
  if (e.content !== "<@741645266427314198> token") {
    return;
  }

  if (e.guildId == "815946801755586570" || e.guildId == "683939861539192860" || e.guildId == "665189315877535753") {
    const user = client.users.cache.get(e.author.id);
    if (!user) {return}
    const res = await getMisskeyInviteCode()
    await user.send(`Invite Code: \`${res}\``)

    console.log("メンションサれました");
  }
  return;
});

client.login("")

async function getMisskeyInviteCode (){
  const res = await axios.post("https://mi.growthers.dev/api/admin/invite", {"i": ""})
  console.log(res.data)
  return res.data.code
}

