const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)


bot.start(async ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    await ctx.reply(`Ao seu dispor, Mestre ${from.first_name} ${from.last_name} !`)
    
})