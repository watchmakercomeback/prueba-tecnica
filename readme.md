# Nombre del Proyecto

Proyecto solicitado de agentes con dos funcionalidades, para probarlo, puedes editar el archivo index.js, a continuación se dice como usar

## Instalación

Antes de ejecutar el código, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. Clona el repositorio:
   `git clone https://github.com/watchmakercomeback/prueba-tecnica/`

2. Navega al directorio del proyecto:

cd prueba-tecnica-2
Instala las dependencias con npm:

`npm install`

3. Ejecución
   Una vez que hayas instalado las dependencias, puedes ejecutar la aplicación utilizando el siguiente comando:

`node index.js`

4. Pruebas
   Puedes ejecutar las pruebas unitarias con el siguiente comando:

`npm run test`

Este comando utilizará el marco de pruebas especificado en el archivo de configuración package.json y ejecutará todas las pruebas disponibles.

## Patrón de Diseño de Estrategia

Este proyecto utiliza el patrón de diseño de estrategia para ejecutar bajo el contexto de agente, las posibles estrategias (en este caso dos posibles estrategias para cada funcionalidad).

# Arquitectura Limpia

El código sigue los principios de la arquitectura limpia para separar las carpetas dependiendo de los recursos, hacer código limpio sin comentarios, identado lo mejor posible, se separaron las funcionalidades (excepto la de la escalera para explirar dos puntos de vista del patrón de diseño, uno con switch en la misma estrategia y otro separando las estrategias).
