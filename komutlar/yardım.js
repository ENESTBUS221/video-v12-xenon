const dc = require("discord.js")

exports.run = async (client, message, args) => {
  let embed = new dc.MessageEmbed()
  .setTitle("Yedek Sistemi")
  .setDescription(`
  
  Sunucularınızın Yedeklerini Oluşturun Ve Yükleyin
  
  **Komutlar**
  **[!yedek-al](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Alırsınız.
  **[!yedek-yükle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedeği Yüklersiniz.
  **[!yedek-sil](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Silersiniz.
  **[!yedek-liste](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Yedek Listenize Bakarsınız.
  **[!yedek-bilgi](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=applications.commands+bot&permissions=8)**   Belirttiğiniz Yedeğin Özelliklerine Bakarsınız.
  `)
  .setColor("GREEN")
  message.channel.send(embed)
  }