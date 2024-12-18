const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('🖼️ Muestra el avatar de un usuario')
    .addUserOption(option =>
      option.setName('usuario')
        .setDescription('El usuario cuyo avatar mostrar')
        .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('usuario') || interaction.user;
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`🌟 Avatar de ${user.username}`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setFooter({ text: 'Comando creado por Cristian Querol 💻', iconURL: 'https://cdn.discordapp.com/attachments/1312767048631193642/1319082854113611818/080fc6b285e3469f1a824d7cbf25f0f1.jpg?ex=6764ab23&is=676359a3&hm=69143b5bb0fc8c44c328ba15371f9d5d3dab856a3c413b25c7e733c5edec6b32&' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
