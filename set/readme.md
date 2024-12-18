# 📣 Sistema de Sugerencias para Discord.js V14 con MegaDB

Este sistema de sugerencias para tu bot de Discord te permite recibir y gestionar sugerencias enviadas por los usuarios. Utiliza **MegaDB** para almacenar las configuraciones y las sugerencias, y **Discord.js V14** para crear comandos atractivos con **embeds** y **emojis**.

---

## 📦 Instalación de Dependencias

Antes de empezar, necesitas instalar las siguientes dependencias:

```bash
npm install discord.js@14 megadb
```

Esto instalará Discord.js V14 para la interacción con Discord y MegaDB para gestionar la base de datos de sugerencias.

⚙️ Configuración del index.js
📝 Cambios en el index.js
Importar dependencias:

Asegúrate de importar MegaDB al inicio de tu archivo index.js:

```bash
const db = require('megadb');
```
Crear una instancia de MegaDB:

Crea una base de datos con MegaDB para almacenar el canal de sugerencias:

```bash
const sugerenciasDB = new db.crearDB('sugerencias');
```
## Registrar los comandos:

Los comandos /setsugerencias y /sugerir deben estar correctamente registrados en tu bot.
## 📋 Comando /setsugerencias
Este comando permite establecer el canal donde se enviarán las sugerencias.

## 💬 Comando /sugerir
Este comando permite a los usuarios enviar sugerencias al canal configurado.

📝 Cambios necesarios para /sugerir

🗂 Estructura de Archivos
Asegúrate de tener la siguiente estructura de archivos:

```bash
- /comandos
  - setsugerencias.js
  - sugerir.js
- index.js
- node_modules/
- package.json
- config.json

```
La carpeta /comandos debe contener los archivos de los comandos (setsugerencias.js y sugerir.js). Estos archivos se encargan de manejar las interacciones con el usuario.

💻 **Autor:** *Cristian Querol*  

