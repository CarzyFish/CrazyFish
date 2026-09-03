# Crazy Fish — SPA Premium HORECA 🐟

Single Page Application para **Crazy Fish** ([@crazyfish.cl](https://instagram.com/crazyfish.cl)), distribuidora premium de pescados y mariscos para restaurantes, hoteles y canal gastronómico en Santiago de Chile.

## ✨ Características

- **Tema oscuro premium** (Dark Navy `#070e17` / `#0b1624`, acentos Cyan `#38bdf8` y Esmeralda `#34d399`).
- **Hero** con propuesta de valor, CTAs y enlace a Instagram.
- **4 pilares de ventaja competitiva** (rendimiento, entrega AM, costeo, cadena de frío).
- **Catálogo interactivo** con filtro por tabs (Todos / Pescados Nobles / Mariscos Frescos) y 9 productos con precio suelto y precio convenio B2B.
- **Nota comercial** destacada (política de malla estudiable).
- **Cotizador rápido**: agrega productos con cantidades y genera un mensaje precargado de WhatsApp con el detalle y el nombre del restaurante.
- **Footer profesional** con contacto, sello de cadena de frío y botón flotante de WhatsApp.
- **100% responsive** con microinteracciones y animaciones (GSAP + ScrollTrigger).

## 🛠️ Stack

HTML5 semántico · [Tailwind CSS](https://tailwindcss.com) (CDN) · Vanilla JavaScript · [Lucide Icons](https://lucide.dev) · [GSAP](https://gsap.com).

Todo vive en un único archivo: **`index.html`** (sin build, sin dependencias que instalar).

## ⚙️ Configuración

Antes de publicar, edita en `index.html` (bloque `CONFIGURACIÓN` al inicio del `<script>`):

```js
const WHATSAPP_NUMBER = '56912345678'; // ← número real (formato internacional, sin "+" ni espacios)
const INSTAGRAM_URL   = 'https://instagram.com/crazyfish.cl';
```

> El número por defecto es un **placeholder**. Reemplázalo por el WhatsApp comercial real de Crazy Fish (Chile: `56` + `9` + los 8 dígitos, ej: `56912345678`).

## 🚀 Despliegue

### GitHub Pages
1. Sube el repositorio a GitHub.
2. **Settings → Pages → Build and deployment**.
3. En *Source* elige **Deploy from a branch**, selecciona la rama y carpeta `/ (root)`.
4. En unos minutos el sitio estará disponible en `https://<usuario>.github.io/<repo>/`.

El archivo `.nojekyll` está incluido para que GitHub Pages sirva el sitio sin procesarlo con Jekyll.

### Vercel / Netlify
Arrastra la carpeta o conecta el repositorio — no requiere configuración de build (sitio estático).

### Local
Abre `index.html` directamente en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8080
# luego abre http://localhost:8080
```
