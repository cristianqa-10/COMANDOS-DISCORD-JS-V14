const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('🤖 Muestra información sobre el bot'),
  async execute(interaction) {
    const botUser = interaction.client.user;

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('💡 Información del Bot')
      .setThumbnail(botUser.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '🤖 Nombre', value: botUser.username, inline: true },
        { name: '🆔 ID', value: botUser.id, inline: true },
        { name: '🔧 Versión de Discord.js', value: require('discord.js').version, inline: true },
        { name: '📅 Fecha de creación', value: `<t:${Math.floor(botUser.createdTimestamp / 1000)}:D>`, inline: true },
      )
      .setFooter({ text: 'Comando creado por Cristian Querol 💻', iconURL: 'https://example.com/tu-icono.png' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
