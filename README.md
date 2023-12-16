# Prueba técnica maquetado

![Diseño a seguir](/public/desing-figma.png)

**Examen técnico.**
El objetivo es que maquetes con la tecnología que vos quieras y te sientas más cómoda (Ya que no va a ser sobre VTEX el ejercicio).

Los requerimientos:
Respetar los márgenes entre los módulos establecidos en el figma.
Que sea responsive. Por eso se encuentra el diseño en **Mobile** y **Desktop**.
Las imágenes del banner o del producto las podés descargar del figma.
Usar los colores que se establecen en figma.

**Forma de entrega:**
- [x] URL pública del examen subido para ver la visualización.
  - [mitienda.com](https://mitienda-test-pierce-commerce.vercel.app/)
- [x] URL del git o repositorio de código.

# Solución

## Tecnologías utilizadas

- React.js
  - This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Currently, two official plugins are available:
- CSS Module
- HTML5
- CSS3
- JavaScript
- jsx

## Instalación

**Requisitos**
- NodeJS
- npm

1. Clona este repositorio
2. Navega hasta el directorio del proyecto
3. En terminal ejecuta los siguientes comandos:
  
```bash
# instalar dependencias
npm install
# levantar el servicio
npm run dev
# se puede acceder por localhost puerto 5173
  VITE v5.0.8  ready in 192 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

### Estructura del Proyecto

```bash
├───public
└───src
    └───components
        ├───CardProduct
        ├───CarouselMenu
        ├───Footer
        ├───Header
        │   ├───NavBar
        │   ├───NavBarMobile
        │   ├───SearchBar
        │   └───UserProfile
        ├───Icons
        ├───ListProducts
        ├───Oferts
        ├───ProcessBuys
        │   └───ProcessCard
        ├───TopCategories
        ├───TopSales
        └───Trends
```

La aplicación inicia en el archivo `main.jsx`, el cual se encarga de inyectar el componente principal App.jsx en el elemento raíz (root) del DOM. Desde ahí, `App.jsx` se encarga de renderizar las siguientes vistas y componentes de la aplicación.

```jsx
function App() {

  return (
    <>
      <Header />
      <Oferts />
      <Trends />
      <TopCategories />
      <TopSales />
      <ProcessBuys />
      <Footer />
    </>
  )
}
```