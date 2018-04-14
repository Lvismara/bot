const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)


bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Ao seu dispor, Mestre ${from.first_name} ${from.last_name} !`)
    
})

bot.on('text',ctx=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)

    ctx.reply(`Texto '${text_msg}' recebido com sucesso`)
})

bot.on('location',ctx=>{
    const local = ctx.update.message.location
    console.log(local)
    ctx.reply(`Você esta em 
    Lat: ${local.latitude},
    Lon: ${local.longitude} `)
})

bot.on('contact',ctx=>{
    const contato = ctx.update.message.contact
    console.log(contato)
    ctx.reply(`Vou lembrar do(a) ${contato.first_name} (${contato.phone_number})  `)
})

bot.on('voice',ctx=>{
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`O audio possui ${voice.duration}s`)
})

bot.on('photo',ctx=>{
    const foto = ctx.update.message.photo
    console.log(foto)
    foto.forEach( (ph,i) =>{
       ctx.reply(`Foto ${i} tem resolução de ${ph.width}x${ph.height} `)
    });
})

bot.on('sticker',ctx=>{
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    ctx.reply(`Muito bom esse ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

bot.startPolling()
    