const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Elimina una cantidad específica de mensajes.')
    .addIntegerOption(option => option.setName('cantidad').setDescription('Número de mensajes a eliminar').setRequired(true)),

  async execute(interaction) {

    if (!interaction.member.permissions.has('ADMINISTRATOR')) {
      return interaction.reply({ content: '🚫 **No tienes permisos de administrador para ejecutar este comando.**', ephemeral: true });
    }

    const cantidad = interaction.options.getInteger('cantidad');

    if (cantidad < 1 || cantidad > 100) {
      return interaction.reply({ content: '⚠️ **Por favor, selecciona un número entre 1 y 100 mensajes para eliminar.**', ephemeral: true });
    }

    try {
      await interaction.channel.bulkDelete(cantidad, true);
      return interaction.reply({
        embeds: [{
          title: '🧹 **Mensajes Eliminados** 🧹',
          description: `**Cantidad**: ${cantidad} mensajes han sido eliminados exitosamente.`,
          color: 0x00FF00,
          footer: { text: `Comando ejecutado por ${interaction.user.tag}` },
          timestamp: new Date(),
        }]
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({ content: '❌ **Hubo un error al intentar eliminar los mensajes.**', ephemeral: true });
    }
  },
};
