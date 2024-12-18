const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banea a un miembro del servidor.')
    .addUserOption(option => option.setName('usuario').setDescription('Usuario a banear').setRequired(true))
    .addStringOption(option => option.setName('razon').setDescription('Razón del baneo')),

  async execute(interaction) {
   
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({ content: '🚫 **No tienes permisos de administrador para ejecutar este comando.**', ephemeral: true });
    }

    const user = interaction.options.getUser('usuario');
    const razon = interaction.options.getString('razon') || 'No se especificó una razón';
    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({ content: '🚫 **No se ha encontrado al miembro en este servidor.**', ephemeral: true });
    }

    if (!member.bannable) {
      return interaction.reply({ content: '⚠️ **No puedo banear a este miembro. Puede que tenga más permisos que yo.**', ephemeral: true });
    }

    try {
      await member.ban({ reason: razon });
      return interaction.reply({
        embeds: [{
          title: '🔥 **Miembro Baneado** 🔥',
          description: `**Usuario**: ${user.tag}\n**Razón**: ${razon}`,
          color: 0xFF0000,
          thumbnail: { url: user.avatarURL() },
          footer: { text: `Comando ejecutado por ${interaction.user.tag}` },
          timestamp: new Date(),
        }]
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: '❌ **Hubo un error al intentar banear al miembro.**', ephemeral: true });
    }
  },
};
