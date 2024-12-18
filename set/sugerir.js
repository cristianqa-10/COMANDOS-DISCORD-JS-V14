module.exports = {
  data: new SlashCommandBuilder()
    .setName('sugerir')
    .setDescription('Envía una sugerencia al canal configurado.')
    .addStringOption(option => 
      option.setName('mensaje')
        .setDescription('Escribe tu sugerencia.')
        .setRequired(true)),

  async execute(interaction) {
    const mensaje = interaction.options.getString('mensaje');
    
    const canalId = await sugerenciasDB.obtener('canal');
    const canal = await interaction.client.channels.fetch(canalId);
    
    if (!canal) {
      return interaction.reply({ content: 'No se ha configurado un canal de sugerencias aún. Si eres administrador del grupo, usa `/set-sugerencias` para configurar uno.', ephemeral: true });
    }

    const embed = {
      color: 0x1abc9c, 
      title: 'Nueva Sugerencia 💡',
      description: `**Sugerencia:** ${mensaje}`,
      fields: [
        {
          name: '📨 Enviado por:',
          value: interaction.user.tag,
        },
        {
          name: '🔹 Usuario ID:',
          value: interaction.user.id,
        },
      ],
      footer: {
        text: `Sugerencia enviada el ${new Date().toLocaleString()}`,
      },
    };

    
    await canal.send({ embeds: [embed] });

    
    await interaction.reply({ content: '¡Gracias por tu sugerencia! 🎉', ephemeral: true });
  },
};
