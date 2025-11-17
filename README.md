# Bufete Legal - Sitio Web

Sitio web profesional para un bufete legal, desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- Diseño profesional y responsivo
- Secciones: Servicios, Nosotros, Testimonios y Contacto
- Formulario de contacto con validación
- Integración con Google Tag Manager para seguimiento de conversiones
- Paleta de colores corporativa: azul oscuro (#0a2a43), blanco y dorado
- Optimizado para SEO

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🔧 Instalación

1. Clone este repositorio o descargue los archivos del proyecto

2. Instale las dependencias:
```bash
npm install
```

## 💻 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

## 🏗️ Compilación para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`

## 📊 Integración con Google Tag Manager

### Configuración de GTM

1. Cree una cuenta en [Google Tag Manager](https://tagmanager.google.com/)
2. Obtenga su código de contenedor GTM (formato: GTM-XXXXXXX)
3. Abra el archivo `index.html` en la raíz del proyecto
4. Busque el comentario que dice `<!-- Google Tag Manager - Inserte su código GTM aquí -->`
5. Reemplace el código de ejemplo con su código GTM real:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

6. Reemplace `GTM-XXXXXXX` con su ID de contenedor real

### Evento de Conversión

El formulario de contacto está configurado para enviar un evento `lead` al dataLayer cuando se envía correctamente:

```javascript
window.dataLayer.push({ event: 'lead' });
```

Para configurar este evento en Google Ads:

1. En GTM, cree un nuevo activador de tipo "Evento personalizado"
2. Nombre del evento: `lead`
3. Cree una nueva etiqueta de conversión de Google Ads
4. Configure el activador creado en el paso anterior
5. Publique los cambios en GTM

## 📁 Estructura del Proyecto

```
src/
├── components/        # Componentes React
│   ├── Header.tsx    # Navegación principal
│   ├── Hero.tsx      # Sección hero
│   ├── Services.tsx  # Tarjetas de servicios
│   ├── About.tsx     # Sección sobre nosotros
│   ├── Testimonials.tsx  # Testimonios de clientes
│   ├── Contact.tsx   # Información de contacto
│   ├── ContactForm.tsx   # Formulario con validación
│   └── Footer.tsx    # Pie de página
├── pages/
│   └── Index.tsx     # Página principal
├── lib/
│   └── utils.ts      # Utilidades
└── index.css         # Estilos globales
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/index.css`:

- Primary (Azul oscuro): `hsl(207, 74%, 15%)`
- Accent (Dorado): `hsl(43, 74%, 49%)`

### Contenido

Edite los siguientes archivos para personalizar el contenido:

- `src/components/Services.tsx` - Servicios ofrecidos
- `src/components/About.tsx` - Información del bufete
- `src/components/Testimonials.tsx` - Testimonios de clientes
- `src/components/Contact.tsx` - Datos de contacto

## 🌐 Despliegue

Este proyecto es compatible con servicios de hosting como:

- Vercel
- Netlify
- GitHub Pages
- Exportación desde Lovable

Para desplegar, compile el proyecto con `npm run build` y suba la carpeta `dist/` a su servicio de hosting preferido.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Soporte

Para dudas o soporte, contacte con el equipo de desarrollo.
