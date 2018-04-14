const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

var idGlobal=env.msgFromId
bot.start(ctx =>{
    const from = ctx.update.message.from
    console.log(from)
    console.log(idGlobal)
    if(validaID(from.id)){
        ctx.reply(`Ao seu dispor, Mestre ${from.first_name} ${from.last_name} 🤖🤖🤖 !`)
    }else{
        ctx.reply(`Sinto muito mas falo somente com meu mestre`) 
    }
    
})

bot.on('text',(ctx,next)=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)
    if(validaID(idGlobal)){
        if(text_msg == 'fotolocal'){
            ctx.replyWithPhoto({source:`${__dirname}/wall.jpg`},
            {caption:'wallpaper local!!!'})
        }else{
            next()
        }
    }
})

bot.on('text',(ctx,next)=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)
    if(validaID(idGlobal)){
        if(text_msg == 'foto'){
            ctx.replyWithPhoto({url: 'http://files.cod3r.com.br/curso-bot/gato1.jpg'},
        {caption:'gato foto Online!!!'})
        }else{
            next()
        }
       
    }
})

bot.on('text',(ctx,next)=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)
    if(validaID(idGlobal)){
        if(text_msg == 'localizacao'){
            ctx.replyWithLocation(29.9773008, 31.1303068)
        }else{
            next()
        }
       
    }
})

bot.on('text',(ctx,next)=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)
    if(validaID(idGlobal)){
        if(text_msg == 'video'){
            ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v',
        {caption:'video teste Online!!!'})
        }else{
            next()
        }
       
    }
})

bot.on('text',(ctx,next)=>{
    const text_msg = ctx.update.message.text
    console.log(text_msg)
    if(validaID(idGlobal)){
    ctx.reply(`Texto '${text_msg}' recebido com sucesso`)
    }
})

bot.on('location',ctx=>{
    const local = ctx.update.message.location
    console.log(local)
    console.log(idGlobal)
    if(validaID(idGlobal)){
    ctx.reply(`Você esta em 
    Lat: ${local.latitude},
    Lon: ${local.longitude} `)
    }

})

bot.on('contact',ctx=>{
    const contato = ctx.update.message.contact
    console.log(contato)
    console.log(idGlobal)
    if(validaID(idGlobal)){
    ctx.reply(`Vou lembrar do(a) ${contato.first_name} (${contato.phone_number})  `)
    }
})

bot.on('voice',ctx=>{
    const voice = ctx.update.message.voice
    console.log(voice)
    console.log(idGlobal)
    if(validaID(idGlobal)){
    ctx.reply(`O audio possui ${voice.duration}s`)
    }
})

bot.on('photo',ctx=>{
    const foto = ctx.update.message.photo
    console.log(foto)
    console.log(idGlobal)
    if(validaID(idGlobal)){
    foto.forEach( (ph,i) =>{
       ctx.reply(`Foto ${i} tem resolução de ${ph.width}x${ph.height} `)
    });
    }
})

bot.on('sticker',ctx=>{
    const sticker = ctx.update.message.sticker
    console.log(sticker)
    console.log(idGlobal)
    if(validaID(idGlobal)){
    ctx.reply(`Muito bom esse ${sticker.emoji} do conjunto ${sticker.set_name}`)
    }
})


function validaID (id){
    if(id == env.msgFromId){
        console.log(`true /// ${id}-${env.msgFromId} `)
        idGlobal=id
        console.log(idGlobal)
        return true
    }else{
        console.log(`false /// ${id}-${env.msgFromId} `)
        idGlobal=0
        console.log(idGlobal)
        return false
    }   
}
bot.startPolling()
    