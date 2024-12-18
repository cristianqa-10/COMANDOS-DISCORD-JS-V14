const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Expulsa a un miembro del servidor.')
    .addUserOption(option => option.setName('usuario').setDescription('Usuario a expulsar').setRequired(true))
    .addStringOption(option => option.setName('razon').setDescription('Razón de la expulsión')),

  async execute(interaction) {
    // Verificar permisos de administrador
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({ content: '🚫 **No tienes permisos de administrador para ejecutar este comando.**', ephemeral: true });
    }

    const user = interaction.options.getUser('usuario');
    const razon = interaction.options.getString('razon') || 'No se especificó una razón';
    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({ content: '🚫 **No se ha encontrado al miembro en este servidor.**', ephemeral: true });
    }

    if (!member.kickable) {
      return interaction.reply({ content: '⚠️ **No puedo expulsar a este miembro. Puede que tenga más permisos que yo.**', ephemeral: true });
    }

    try {
      await member.kick(razon);
      return interaction.reply({
        embeds: [{
          title: '⚡ **Miembro Expulsado** ⚡',
          description: `**Usuario**: ${user.tag}\n**Razón**: ${razon}`,
          color: 0xFF0000,
          thumbnail: { url: user.avatarURL() },
          footer: { text: `Comando ejecutado por ${interaction.user.tag}` },
          timestamp: new Date(),
        }]
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: '❌ **Hubo un error al intentar expulsar al miembro.**', ephemeral: true });
    }
  },
};
