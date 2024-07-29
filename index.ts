import { Telegraf } from "telegraf";

const TOKEN = process.env.BOT_TOKEN;
const WEB_URL = process.env.WEB_APP_URL;

if (!TOKEN) {
  throw new Error("BOT_TOKEN is missing from environment variables.");
}
const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: WEB_URL as string } }]],
    },
  })
);

bot.launch();

console.log(`Bot is running.....`);
