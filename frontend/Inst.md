1. git init
2. npm init vite@latest . (. para algo tipo plantilla y que conserve el nombre de la carpeta `o también puede ser algo como Front o Client para luego tirar a otra carpeta Back un proyecto express`)
3. ajustar ubicación de <.gitignore> para dejarlo al lado de .git
4. instalar las dependencia iniciales de vite
5. tailwind
  1. npm install -D tailwindcss postcss autoprefixer
  2. npx tailwindcss init -p
  3. tailwind.config.js: `content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],`
  4. index.css después de las importaciones (en caso de que existan): 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  5. eliminar todo css inútil
6. instalar:
  1. <react-router-dom>
  2. <react-scroll> import { Link as LinkScroll }
  3. <react-icons> (FaTimes)
  4. <smooth-scroll> desplazamiento suave
  5. <gsap> animaciones
7. en main.tsx envolver <App/> en <BrowserRouter>
