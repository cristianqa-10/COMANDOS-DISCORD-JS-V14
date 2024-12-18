const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('📊 Muestra información detallada del servidor'),
  async execute(interaction) {
    const { guild } = interaction;

    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`📌 Información del servidor: ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: '🔑 ID del Servidor', value: `${guild.id}`, inline: true },
        { name: '👥 Miembros', value: `${guild.memberCount}`, inline: true },
        { name: '🌎 Región', value: `${guild.preferredLocale}`, inline: true },
        { name: '📅 Fecha de creación', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:D>`, inline: true },
      )
      .setFooter({ text: 'Comando creado por Cristian Querol 💻', iconURL: 'https://cdn.discordapp.com/attachments/1312767048631193642/1319082854113611818/080fc6b285e3469f1a824d7cbf25f0f1.jpg?ex=6764ab23&is=676359a3&hm=69143b5bb0fc8c44c328ba15371f9d5d3dab856a3c413b25c7e733c5edec6b32&' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
