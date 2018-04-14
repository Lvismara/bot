const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    if(from.id === 12345){
        ctx.reply(`Ao seu dispor, Mestre ${from.first_name} ${from.last_name} !`)
    }else{
        ctx.reply(`Sinto muito mas falo somente com meu mestre`) 
    }   
    
})

bot.startPolling()
    