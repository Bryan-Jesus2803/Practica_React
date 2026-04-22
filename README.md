# Practica con React ⚛️

---

## 📌 Descripción

Este proyecto es una práctica de desarrollo frontend utilizando **React + Vite + Tailwind CSS**, enfocado en la creación de componentes reutilizables y la aplicación de buenas prácticas como:

* Arquitectura basada en componentes
* Principios DRY (Don't Repeat Yourself)
* Principio KISS (Keep It Simple, Stupid)
* Uso de props en React
* Estilado con Tailwind CSS

---

## 🚀 Tecnologías utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS

---

## 📁 Estructura del proyecto

```
MI-APP-REACT/
│
├── public/
├── src/
│
├── index.html
├── package.json
├── package-lock.json
│
├── vite.config.ts
├── eslint.config.js
│
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
│
└── .gitignore
```

---

## 📦 Instalación del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/mi-app-react.git
```

---

### 2. Entrar al proyecto

```bash
cd mi-app-react
```

---

### 3. Instalar dependencias

```bash
npm install
```
Las dependencias del proyecto están definidas en package.json
---

## ▶️ Ejecución del proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abre en tu navegador:

```
http://localhost:5173
```

---

## 🎨 Configuración de Tailwind CSS

Tailwind ya está configurado mediante Vite plugin.

### Instalación (si se requiere en otro proyecto)

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 🧱 Componente Button

Se creó un componente reutilizable llamado `Button` dentro de la carpeta src, en la subcarpeta "components".

---

### 🎯 Variantes disponibles

| Variante    | Descripción                      |
| ----------- | -------------------------------- |
| primary     | Botón principal                  |
| outline     | Botón secundario con borde       |
| destructive | Botón de acción peligrosa (rojo) |

---

### 🔘 Prop adicional (lo que pedia la actividad agregar)

| Prop    | Tipo    | Descripción                          |
| ------- | ------- | ------------------------------------ |
| rounded | boolean | Activa bordes completamente redondos |

---

## 🧪 Ejemplo de uso

```tsx
<Button>Normal</Button>

<Button variant="outline">
  Outline
</Button>

<Button variant="destructive">
  Eliminar
</Button>

<Button rounded>
  Redondeado
</Button>
```

---

## 🧠 Conceptos aplicados

* Componentes reutilizables en React
* Props y tipado con TypeScript
* Condicionales para estilos dinámicos
* Uso de Tailwind CSS
* Separación de responsabilidades
* Código limpio (DRY + KISS)

---

## ✨ Autor
Bryan Pérez Estudiante de Hybridge Education en la carrera de Ingeniería en Software

Proyecto realizado como práctica de React + Tailwind CSS para aprendizaje de componentes reutilizables.
