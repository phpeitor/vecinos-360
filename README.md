# Vecinos360💸

[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

Proyecto web estático para mostrar y gestionar opciones de pago en 360pay.

<p align="center">
  <img src="./img/Logo360payPNG.png" alt="Logo 360pay" width="220" />
</p>

<p align="center">
  <img src="./img/inka1.png" alt="Inka frame 1" width="140" />
  <img src="./img/inka2.png" alt="Inka frame 2" width="140" />
  <img src="./img/inka3.png" alt="Inka frame 3" width="140" />
  <img src="./img/inka4.png" alt="Inka frame 4" width="140" />
</p>

## Quick Start

1. Clonar este repositorio.

```bash
git clone https://github.com/phpeitor/vecinos-360.git
cd vecinos-360
```

2. Abrir `index.html` en tu navegador.

## Nota Técnica

### Estructura Base

- `index.html`: plantilla principal de la interfaz.
- `css/general.css`: estilos globales, responsive y keyframes de animación.
- `js/functions.js`: lógica de interacción de botones de pago.
- `js/360pay-iframe.js`: contenido modal para términos y políticas.
- `img/`: recursos gráficos (logo, frames del inka, iconos).

### Animación del Inka

La animación se compone de 4 frames (`inka1.png` a `inka4.png`) superpuestos en el mismo contenedor y controlados con CSS keyframes. Cada frame tiene su propia ventana de opacidad para mostrar una secuencia continua y cerrar con fade out en el último estado.

### Comportamiento UI

- El logo principal tiene animación suave flotante.
- Los botones de bancos/billeteras aplican una animación de selección (zoom) al hacer clic.
- El personaje Inka se muestra en escritorio y tablet, y se oculta en mobile para evitar solapamiento de contenido.

### Mantenimiento Rápido

- Para ajustar ritmo de animación, modificar la duración en los keyframes del bloque Inka.
- Para cambiar intensidad visual, editar transform y opacity en el frame final.
- Mantener assets optimizados para no afectar tiempos de carga.
