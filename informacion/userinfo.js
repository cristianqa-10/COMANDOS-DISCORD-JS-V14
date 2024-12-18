const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('👤 Muestra información detallada sobre un usuario')
    .addUserOption(option =>
      option.setName('usuario')
        .setDescription('El usuario del que mostrar la información')
        .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('usuario') || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`👑 Información de ${user.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: '👤 Nombre de usuario', value: user.username, inline: true },
        { name: '🆔 ID de usuario', value: user.id, inline: true },
        { name: '🔴 Estado', value: member.presence ? member.presence.status : 'No disponible', inline: true },
        { name: '🗓️ Fecha de unión', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:D>`, inline: true },
        { name: '🎭 Roles', value: member.roles.cache.map(role => role.name).join(', '), inline: false },
      )
      .setFooter({ text: 'Comando creado por Cristian Querol 💻', iconURL: 'https://cdn.discordapp.com/attachments/1312767048631193642/1319082854113611818/080fc6b285e3469f1a824d7cbf25f0f1.jpg?ex=6764ab23&is=676359a3&hm=69143b5bb0fc8c44c328ba15371f9d5d3dab856a3c413b25c7e733c5edec6b32&' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
