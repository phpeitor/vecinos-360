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

## Stack

- HTML estático.
- CSS propio en `css/general.css` y `css/360pay-iframe.css`.
- Bootstrap y FontAwesome locales.
- JavaScript con jQuery para tabs, countdown, copiado y modales legales.
- Assets locales en `img/`, `img/logos/` y `webfonts/`.

## Quick Start

1. Clonar el repositorio.

```bash
git clone https://github.com/phpeitor/vecinos-360.git
cd vecinos-360
```

2. Abrir `index.html` directamente en el navegador o servir la carpeta desde Apache/Nginx.

```bash
# Ejemplo en Apache local
http://127.0.0.1/vecinos-360/
```

## Estructura

```text
.
├── index.html                # Pantalla principal de instrucciones de pago
├── config.json               # Configuración consumida por la interfaz
├── FRONTEND_RULES.md         # Reglas de trabajo frontend del proyecto
├── css/
│   ├── general.css           # Layout, responsive, animaciones y estilos UI propios
│   ├── 360pay-iframe.css     # Estilos de legales/modal/footer
│   ├── bootstrap.min.css     # Librería externa
│   ├── all.css               # FontAwesome local
│   ├── fonts.css             # Fuentes
│   └── styles.css            # Estilos heredados/base
├── js/
│   ├── functions.js          # Interacciones principales de pago/canales
│   ├── 360pay-iframe.js      # Render de términos y políticas
│   ├── client_service.js     # Servicios auxiliares
│   └── *.min.js              # Librerías externas
├── img/
│   ├── inka*.png             # Frames del personaje Inka
│   ├── Logo360payPNG.png     # Logo principal
│   ├── copy.svg              # Icono de copiar
│   └── logos/                # Logos de bancos y billeteras
└── webfonts/                 # Fuentes de FontAwesome
```

## Arquitectura UI

- `index.html` define la composición de la vista: encabezado, datos del servicio, canales, instrucciones, legales y modal.
- `css/general.css` concentra los estilos visuales principales, responsive y animaciones decorativas.
- `css/360pay-iframe.css` mantiene reglas acotadas para textos legales, footer y modal.
- `js/functions.js` controla selección de bancos/canales, copy-to-clipboard y comportamiento de UI.
- `js/360pay-iframe.js` inyecta contenido legal dentro del modal.

## Animaciones

- Fondo gradiente con colores tipo Adminio y movimiento suave.
- Íconos monetarios flotantes decorativos, ubicados en laterales para no competir con el contenido.
- Logo principal con animación leve de flotación.
- Botones de bancos con feedback visual al seleccionar.
- Personaje Inka compuesto por 4 frames superpuestos, efectos de átomo, partículas y movimiento de escena.
- Las animaciones respetan `prefers-reduced-motion` cuando corresponde.

## Responsive

- La interfaz prioriza legibilidad en mobile y desktop.
- El personaje Inka se oculta en pantallas pequeñas para evitar solapamiento.
- Los íconos decorativos bajan tamaño/opacidad en mobile.
- Evitar anchos fijos nuevos salvo que estén protegidos con `max-width`, `clamp()` o media queries.

## Mantenimiento

- Editar estilos propios en `css/general.css` o `css/360pay-iframe.css`.
- No modificar archivos minificados de terceros salvo actualización explícita de la librería.
- Mantener assets optimizados antes de subirlos.
- Validar cambios visuales en mobile, tablet y desktop.
- Si se cambia una animación, revisar impacto sobre rendimiento y accesibilidad.
- Para reglas frontend detalladas, revisar `FRONTEND_RULES.md`.

## Checklist De QA

- `index.html` carga sin errores en consola.
- El código de pago se muestra y puede copiarse.
- Tabs de bancos y canales cambian correctamente.
- Modales de `Términos y condiciones` y `Políticas de privacidad` abren y renderizan contenido.
- Instrucciones de pago se leen correctamente en mobile.
- Animaciones no tapan contenido ni bloquean clicks.
- El footer mantiene contraste suficiente sobre el gradiente.

## Convenciones

- Usar HTML semántico cuando se agreguen bloques nuevos.
- Preferir clases CSS descriptivas sobre estilos inline.
- Mantener JavaScript simple y defensivo: validar selectores antes de operar sobre el DOM.
- Evitar dependencias nuevas si la interacción puede resolverse con el stack actual.
- Separar cambios visuales, lógicos y de contenido cuando sea posible.
