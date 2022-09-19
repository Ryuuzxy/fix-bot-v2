let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 タRyuuzxyあ 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 6k/grup (1 minggu)
    ┊⫹⫺ Normal: 20k/grup (1 bulan)
    ┊⫹⫺ Standar: 35k/grup (2 bulan)
    ┊⫹⫺ Pro: 50k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (6 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 10k (1 bulan)
    ┊⫹⫺ Pro: 25k (4 bulan)
    ┊⫹⫺ Vip: 35k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 50k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Indosat: [087857125886]
    • Dana: [087857125886]
    • Gopay: [085778411638]
    • Ovo: [085778411638]
    
    
    Nomor Owner :
    wa.me/62812911555341
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY © ㋡R么ғғᴜʀɪ𝄢`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
