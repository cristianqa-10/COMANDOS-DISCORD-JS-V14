const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role')
    .setDescription('Asigna un rol a un miembro.')
    .addUserOption(option => option.setName('usuario').setDescription('Usuario al que se le asignará el rol').setRequired(true))
    .addRoleOption(option => option.setName('rol').setDescription('Rol a asignar').setRequired(true)),

  async execute(interaction) {
  
    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({ content: '🚫 **No tienes permisos de administrador para ejecutar este comando.**', ephemeral: true });
    }

    const user = interaction.options.getUser('usuario');
    const rol = interaction.options.getRole('rol');
    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({ content: '🚫 **No se ha encontrado al miembro en este servidor.**', ephemeral: true });
    }

    try {
      await member.roles.add(rol);
      return interaction.reply({
        embeds: [{
          title: '🎉 **Rol Asignado** 🎉',
          description: `**Usuario**: ${user.tag}\n**Rol**: ${rol.name}`,
          color: 0x0000FF,
          thumbnail: { url: user.avatarURL() },
          footer: { text: `Comando ejecutado por ${interaction.user.tag}` },
          timestamp: new Date(),
        }]
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: '❌ **Hubo un error al intentar asignar el rol al miembro.**', ephemeral: true });
    }
  },
};
