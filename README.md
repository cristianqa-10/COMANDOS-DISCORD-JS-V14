# COMANDOS-DISCORD-JS-V14
Este repositorio contiene una serie de comandos diseñados para trabajar con Discord.js v14. Estos comandos están divididos en carpetas y categorías para mejorar la organización del código.

## 🚨 ATENCIÓN 🚨
Antes de comenzar, es importante tener en cuenta los siguientes puntos:

## Estructura de Carpetas en este Repositorio: 

En este repositorio, los comandos están organizados en subcarpetas dentro de la carpeta /comandos para facilitar la visualización y la organización del código.

## Cómo Adaptarlo a [NUESTRO COMMAND HANDLER BÁSICO](https://github.com/cristianqa-10/DISCORD-JS-INICIACION): 

Si tu index.js utiliza un command handler sencillo, deberás mover los comandos a una sola carpeta sin subcarpetas. De esta forma, todos los comandos estarán en una única carpeta, lo que simplifica la organización de tu código para ese tipo de estructura.

## Command Handler Avanzado: 

Si prefieres una estructura más avanzada con subcarpetas, puedes hacerlo. En este caso, necesitarás modificar tu command handler para que reconozca las subcarpetas dentro de /comandos. En otro repositorio, se explicará cómo implementar este tipo de command handler avanzado. Esto será explicado más adelante en otro repositorio.

## 🔧 Requisitos previos
Cuando crees comandos nuevos, debes poner estos dos comandos en CMD.
```bash
node deploy-commands.js
node . 
```


## 📂 Estructura de Carpetas para mi command handler básico 


```bash
  ├── /comandos
  │   ├── ban.js
  │   ├── kick.js
  │   ├── clear.js
  │   ├── set-sugerencias.js
  │   ├── ping.js
  │   ├── botinfo.js
  │   ├── userinfo.js
ETC...

```




