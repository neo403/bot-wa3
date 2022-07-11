let handler = async m => m.reply(`
            .✵.════𝔻𝕆ℕ𝔸𝕊𝕀════.✵.
            
6288219947210 pulsa
6289505478069 Dana/pulsa

*🪀 PUSH 1.000 KONTAK 🪀*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*🔮SAVE #XneoDev⁩@Tanggerang.id🔮*
*_➥ SVB Sebut Nama + Askot!!_*

http://wa.me/6288219947210
*――――――――――――――――――*
     ❍ㅤ        ⎙ㅤ         ⌲
ᶜᵒᵐᵐᵉⁿᵗ      ˢᵃᵛᵉ         ˢʰᵃʳᵉ

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler