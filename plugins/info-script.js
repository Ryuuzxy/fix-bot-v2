import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UCBYk6B1tkZ233ElCqImkC7Q*

Script? base kannabot banh cari aj sendiri😁🥶🙏

Owner bilej:
wa.me/6281291155341`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/raffuri",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/tv/CgO7Jb9Fkfx/?utm_source=ig_web_copy_link", 
    title: 'タRyuuzxyあ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
