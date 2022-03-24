# Notifications App

### Rquisitos
- [https://nodejs.org/en/] - Node

### Instalacion 
```sh
npm install
```

### Comandos
- Iniciar proyecto
```sh
npm start
```
- Compilar SASS a CSS
```sh
npm run watch
```

### Patron de vistas
Tenemos 3 carpetas donde colocaremos nuestros HTML:
- pages
- partials
- components

Para poder importar un HTML dentro de otro HTML usaremos tag especifico para cada componente
```sh
<component data-component="..."></component>
<component data-partial="..."></component>
<component data-page="..."></component>
```

Ejemplo:
```sh
<component data-component="contactForm"></component>
<component data-partial="navBar"></component>
<component data-page="home"></component>
```

Los nombres deben ser iguales a los archivos HTML.
```sh
app/views/components/contactForm.html
app/views/partials/navBar.html
app/views/pages/home.html
```

Para poder renderizar/cargar estos componentes colocaremos abajo en el archivo HTML donde se use un componente el siguiente Javascript.
Ejemplo:
```sh
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
      <component data-partial="navBar"></component>
      <div>
         <component data-component="contactForm"></component>
      <div>
  </body>
</html>

<script>
    Render.component("component", "contactForm");
    Render.component("partial", "navBar");
</script>

```

app/views/partials/navBar.html
```sh
  <div>  
      <ul>
          <li>1</li>
          <li>2</li>
      </ul>
  </div>
```

app/views/components/contactForm.html
```sh
  <form>
     <input type="text" name="name" />
  </form>
```
