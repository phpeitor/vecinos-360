# Adminio360 🏦 

[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

Proyecto web estático para mostrar y gestionar opciones de pago en 360pay.

<a href="https://www.instagram.com/amvsoft.tech/" align="center">
  <img src="./img/inka1.png" alt="Inka frame 1" width="140" />
  <img src="./img/inka2.png" alt="Inka frame 2" width="140" />
  <img src="./img/inka3.png" alt="Inka frame 3" width="140" />
  <img src="./img/inka4.png" alt="Inka frame 4" width="140" />
</a>

## Descripción

`Adminio360` es una landing estática para mostrar instrucciones de pago de 360pay. La vista concentra datos del servicio, canales disponibles, pasos por banco, textos legales y una capa visual de marca con animaciones livianas.

El proyecto está pensado para publicarse como contenido estático en cualquier servidor o hosting compatible con HTML/CSS/JS sin build step.

## Stack Técnico

- HTML estático en `index.html`.
- CSS propio en `css/general.css` y `css/360pay-iframe.css`.
- Bootstrap local para grilla, tabs, modal y utilidades base.
- FontAwesome local para iconografía.
- jQuery para interacciones existentes de UI.
- Assets locales en `img/`, `img/logos/` y `webfonts/`.

## Ejecución Local

1. Clonar el repositorio.

```bash
git clone https://github.com/phpeitor/vecinos-360.git
cd vecinos-360
```

2. Servir el directorio con el servidor local o remoto de tu preferencia, o abrir `index.html` directamente.

```text
http://127.0.0.1/vecinos-360/
```

3. Si no ves cambios recientes de CSS o JS, recarga ignorando caché con `Ctrl + F5`.

## Estructura Proyecto

```text
.
├── index.html                # Documento principal de la experiencia 360pay
├── config.json               # Configuración auxiliar consumida por JS
├── FRONTEND_RULES.md         # Lineamientos frontend del proyecto
├── css/
│   ├── general.css           # Layout, tema visual, responsive y animaciones
│   ├── 360pay-iframe.css     # Estilos aislados para legales/modal/footer
│   ├── bootstrap.min.css     # Dependencia externa versionada localmente
│   ├── all.css               # FontAwesome local
│   ├── fonts.css             # Fuentes del proyecto
│   └── styles.css            # Estilos base/heredados
├── js/
│   ├── functions.js          # Interacciones principales de bancos, tabs y UI
│   ├── 360pay-iframe.js      # Render dinámico de textos legales de prueba
│   ├── client_service.js     # Lógica auxiliar del servicio
│   └── *.min.js              # Dependencias externas minificadas
├── img/
│   ├── inka*.png             # Frames del personaje Inka
│   ├── Logo360payPNG.png     # Logo principal
│   ├── copy.svg              # Icono de copiado
│   └── logos/                # Bancos, billeteras y canales de pago
└── webfonts/                 # Fuentes usadas por FontAwesome
```

## Arquitectura UI

- `index.html` mantiene la composición general: fondo, tarjeta principal, canales, instrucciones, footer legal y modal.
- `css/general.css` concentra el diseño visual principal, incluyendo fondo, tarjeta, responsive, personaje Inka y microinteracciones.
- `css/360pay-iframe.css` contiene estilos específicos para la sección legal y el modal.
- `js/functions.js` administra selección de bancos, tabs, copiado al portapapeles y feedback de interacción.
- `js/360pay-iframe.js` renderiza contenido de prueba para `Términos y condiciones` y `Políticas de privacidad`.

## Experiencia Visual

- Fondo enterprise con gradiente, grilla sutil, nodos y órbitas decorativas.
- Contenedor principal centrado verticalmente con scroll seguro en pantallas pequeñas.
- Logo con movimiento leve para reforzar presencia de marca sin distraer.
- Botones de bancos con feedback visual al seleccionar.
- Personaje Inka como mascota visual, con animación sutil, globo de interacción y respuesta al click.
- Animaciones protegidas con `prefers-reduced-motion` para usuarios con reducción de movimiento activa.

## Responsive

- La tarjeta prioriza legibilidad en desktop, tablet y mobile.
- El personaje Inka se oculta en pantallas pequeñas para evitar solapamientos.
- Los elementos decorativos reducen tamaño/opacidad en mobile.
- Cualquier ancho nuevo debe usar `max-width`, `clamp()` o media queries.

## Mantenimiento

- Modificar estilos propios en `css/general.css` o `css/360pay-iframe.css`.
- Evitar cambios directos en archivos minificados salvo actualización explícita de dependencia.
- Versionar cambios de CSS/JS con query string en `index.html` para evitar caché del navegador.
- Mantener assets comprimidos y con nombres descriptivos.
- Validar cambios visuales en desktop, tablet y mobile antes de entregar.
- Revisar `FRONTEND_RULES.md` antes de introducir nuevos patrones UI.

## Checklist QA

- `index.html` carga sin errores en consola.
- La tarjeta principal se mantiene centrada y no corta contenido.
- Los bancos cambian de estado activo correctamente.
- Las instrucciones de cada canal son legibles.
- El código de pago puede copiarse cuando existe contenido dinámico.
- Los modales legales abren y muestran contenido.
- La mascota Inka no tapa información ni bloquea acciones críticas.
- Las animaciones no generan saltos visuales ni gaps entre frames.
- Mobile conserva legibilidad y navegación sin overlays invasivos.

## Convenciones Desarrollo

- Preferir cambios pequeños, localizados y fáciles de revisar.
- Mantener HTML semántico cuando se agreguen bloques nuevos.
- Usar clases descriptivas en lugar de estilos inline.
- No agregar dependencias si CSS/JS nativo resuelve la interacción con bajo costo.
- Separar cambios visuales, funcionales y de contenido cuando sea posible.
- Mantener compatibilidad con el stack actual: HTML estático, CSS, Bootstrap y jQuery.

## Notas Producto

- El contenido legal actual es de prueba y debe reemplazarse por textos aprobados antes de producción.
- Los canales visibles dependen de los botones habilitados en `index.html` y de sus bloques de instrucciones asociados.
- Las animaciones son decorativas; la experiencia principal debe seguir funcionando aunque estén desactivadas.
