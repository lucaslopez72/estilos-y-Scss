# Práctica Ionic + Angular + Sass

Página `/home`: título rojo en mayúsculas centrado, botón azul a la derecha e imagen local centrada con borde verde de 3px. El botón incrementa un contador accesible.

## Ejecutar
Requiere Node.js 22.12+ o 24 LTS y npm. Abrir esta carpeta en VS Code.
```sh
npm install
npm start
```
`npm start` ejecuta `ionic serve` con el CLI local. También puedes usar `npx ionic serve`. Abre la dirección que indique la terminal, normalmente http://localhost:8100/home.
```sh
npm run build
```
La salida de producción se genera en `www/browser`. No requiere Vercel.

## Sass y bundle
Se utiliza Ionic Angular 8 con Angular 20 y componentes standalone. El builder `@angular/build:application` usa esbuild para empaquetar producción y el dev-server de Angular usa Vite en desarrollo. Dart Sass transforma los estilos en CSS: no se ejecuta en el navegador.

El starter habitual de Ionic Angular usa `.scss`, una sintaxis de Sass con llaves y punto y coma. Este proyecto utiliza `.sass`, la sintaxis indentada. No se necesita `watch:sass`: Angular recompila Sass y actualiza la vista al guardar durante `ionic serve`.

## Dónde cambiar SCSS a Sass
En `angular.json`, `projects.app.schematics.@schematics/angular:component.style` vale `sass` para generar futuros componentes. `projects.app.architect.build.options.inlineStyleLanguage` vale `sass` para estilos inline. La lista `styles` apunta a `src/global.sass`. En `src/app/home/home.page.ts`, `styleUrl` apunta a `./home.page.sass`. También se convierten los contenidos y extensiones de parciales: cambiar solo la configuración no convierte archivos existentes.

## Código relevante
- `src/theme/_tokens.sass`: variables de color y mixin de centrado.
- `src/app/home/home.page.sass`: anidamiento BEM, estilos y comentarios de los requisitos.
- `src/app/home/home.page.html`: título, botón Ionic y una imagen SVG local sin servicios externos.
- `src/global.sass`: estilos estructurales de Ionic.
- `angular.json`: configuración de compilación y generación de componentes.

## Material del curso
Los ejemplos HTML originales se conservan en el ZIP de entrega del curso. En ellos se usa npm run watch:sass, porque tienen compilación independiente. En esta aplicación Ionic se usa npm start.

## Repositorio
https://github.com/lucaslopez72/estilos-y-Scss
