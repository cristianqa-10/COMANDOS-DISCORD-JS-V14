const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('🏓 Verifica la latencia del bot'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('🏓 Latencia del Bot')
      .addFields(
        { name: '🔌 Latencia', value: `${interaction.client.ws.ping}ms`, inline: true },
        { name: '💬 Tiempo de respuesta', value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true },
      )
      .setFooter({ text: 'Comando creado por Cristian Querol 💻', iconURL: 'https://example.com/tu-icono.png' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
