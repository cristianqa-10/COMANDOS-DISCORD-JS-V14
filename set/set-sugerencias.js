const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('set-sugerencias')
    .setDescription('Configura el canal para recibir las sugerencias.')
    .addChannelOption(option => 
      option.setName('canal')
        .setDescription('Selecciona el canal donde se enviarán las sugerencias.')
        .setRequired(true)),

  async execute(interaction) {
    const canal = interaction.options.getChannel('canal');

   
    await sugerenciasDB.establecer('canal', canal.id);


    const embed = {
      color: 0x3498db,
      title: 'Canal de Sugerencias Configurado ✅',
      description: `Ahora las sugerencias serán enviadas al canal: ${canal}.`,
      fields: [
        {
          name: '🎯 Canal Establecido:',
          value: canal.toString(),
        },
        {
          name: '📋 Sugerencias:',
          value: 'Los miembros podrán enviar sus sugerencias aquí.',
        },
      ],
      footer: {
        text: `Comando ejecutado por ${interaction.user.tag}`,
      },
    };

  
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
