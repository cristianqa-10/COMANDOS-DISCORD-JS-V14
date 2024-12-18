const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Silencia a un miembro por un tiempo específico.')
    .addUserOption(option => option.setName('usuario').setDescription('Usuario a silenciar').setRequired(true))
    .addIntegerOption(option => option.setName('tiempo').setDescription('Tiempo en minutos').setRequired(true)),

  async execute(interaction) {
   
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({ content: '🚫 **No tienes permisos de administrador para ejecutar este comando.**', ephemeral: true });
    }

    const user = interaction.options.getUser('usuario');
    const tiempo = interaction.options.getInteger('tiempo');
    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({ content: '🚫 **No se ha encontrado al miembro en este servidor.**', ephemeral: true });
    }

    try {
      await member.timeout(tiempo * 60 * 1000);
      return interaction.reply({
        embeds: [{
          title: '🔇 **Miembro Silenciado** 🔇',
          description: `**Usuario**: ${user.tag}\n**Tiempo**: ${tiempo} minutos`,
          color: 0xFFFF00,
          thumbnail: { url: user.avatarURL() },
          footer: { text: `Comando ejecutado por ${interaction.user.tag}` },
          timestamp: new Date(),
        }]
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: '❌ **Hubo un error al intentar silenciar al miembro.**', ephemeral: true });
    }
  },
};
