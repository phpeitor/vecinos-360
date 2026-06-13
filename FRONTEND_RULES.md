# Reglas Frontend

Guia de trabajo para mantener la interfaz clara, responsive y facil de modificar.

## HTML

- Mantener una estructura semantica: usar `header`, `main`, `section`, `footer`, `button`, `nav` cuando corresponda.
- Evitar estilos inline; los estilos deben vivir en archivos CSS.
- Usar textos alternativos descriptivos en imagenes funcionales o informativas.
- Mantener los atributos `id` solo para elementos que realmente necesiten referencia unica desde CSS o JavaScript.
- No duplicar bloques grandes de marcado si pueden resolverse con una estructura comun.

## CSS

- Priorizar `css/general.css` para estilos propios del proyecto y evitar modificar librerias minificadas.
- Usar clases descriptivas y consistentes con el componente o seccion que representan.
- Mantener reglas responsive cerca del bloque al que afectan cuando sea posible.
- Evitar valores magicos repetidos; si un valor se reutiliza mucho, considerar una variable CSS.
- No usar `!important` salvo que sea necesario para sobrescribir una libreria externa.
- Probar cambios visuales en mobile, tablet y desktop antes de cerrar una tarea.

## JavaScript

- Mantener la logica propia en archivos no minificados, principalmente `js/functions.js` y `js/360pay-iframe.js`.
- Evitar mezclar manipulacion de DOM con estilos inline; preferir agregar o quitar clases CSS.
- Nombrar funciones y variables segun la accion que realizan.
- Validar que los selectores existan antes de operar sobre elementos del DOM.
- No agregar dependencias nuevas si la interaccion puede resolverse con JavaScript existente.

## Responsive

- Diseñar primero para pantallas pequenas cuando se agreguen bloques nuevos.
- Evitar anchos fijos que rompan el layout; preferir `max-width`, porcentajes, `clamp()` o unidades relativas.
- Verificar que botones y links tengan areas tactiles comodas en mobile.
- Evitar que elementos decorativos tapen contenido principal en pantallas pequenas.

## Accesibilidad

- Todo elemento clickeable debe poder identificarse como accion: usar `button` para acciones y `a` para navegacion.
- Mantener contraste suficiente entre texto y fondo.
- No depender solo del color para comunicar estados.
- Cuidar estados `focus` visibles en controles interactivos.
- Respetar usuarios con sensibilidad al movimiento cuando se agreguen animaciones nuevas.

## Assets

- Optimizar imagenes antes de agregarlas al repositorio.
- Usar nombres de archivo descriptivos y en minusculas cuando sea posible.
- No reemplazar assets existentes sin revisar donde se usan.
- Evitar subir archivos fuente pesados si no son necesarios para ejecutar la web.

## Mantenimiento

- Hacer cambios pequenos y verificables.
- No editar archivos minificados de terceros salvo actualizacion explicita de la libreria.
- Mantener compatibilidad con la estructura actual del proyecto: `index.html`, `css/`, `js/`, `img/` y `webfonts/`.
- Si se cambia comportamiento visible, revisar que no se rompan modales, botones de pago ni animaciones principales.
