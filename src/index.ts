import { Context, } from "telegraf";
import * as dotenv from "dotenv";
import { registerHandlers } from "./handlers";
const Telegraf = require('telegraf')
const session = require('telegraf/session')


dotenv.config({ path: __dirname + '/../.env' });



const main = async () => {
    const bot = new Telegraf(process.env.BOT_TOKEN as any)

    await registerHandlers(bot);


    bot.use(session())

    bot.catch((err: any, ctx: Context) => {
        console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
    });
    bot.launch();
}

main();
