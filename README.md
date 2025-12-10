# 🍕 BocattoValley REST API

API REST para gestión de productos de restaurante desarrollada con Node.js, Express y MongoDB.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **MongoDB** (local o Atlas)
- **Visual Studio Code** (recomendado)
- **Postman** (para probar endpoints)

## 🚀 Instalación y Configuración

### Opción A: Proyecto Existente

#### 1. Clonar/Descargar el Proyecto

```powershell
# Si es un repositorio Git
git clone [URL_DEL_REPOSITORIO]
cd HM14-REST-BOCATTOVALLEY

# O simplemente navegar a la carpeta si ya la tienes
cd "C:\Users\ariel\Documents\5_semestre\WEB AVANZADA\u2\hm\HM14-REST-BOCATTOVALLEY"
```

#### 2. Abrir en Visual Studio Code

```powershell
# Abrir VSCode en la carpeta del proyecto
code .
```

#### 3. Instalar Dependencias

```powershell
# Instalar todas las dependencias del proyecto
npm install
```

### Opción B: Crear Proyecto desde Cero

#### 1. Crear y configurar el proyecto

```powershell
# Crear carpeta del proyecto
mkdir HM14-REST-BOCATTOVALLEY
cd HM14-REST-BOCATTOVALLEY

# Inicializar proyecto Node.js
npm init -y

# Abrir en VSCode
code .
```

#### 2. Instalar dependencias principales

```powershell
# Instalar Express (framework web)
npm install express

# Instalar Mongoose (MongoDB ODM)
npm install mongoose

# Instalar dotenv (variables de entorno)
npm install dotenv
```

#### 3. Instalar dependencias de desarrollo (opcional)

```powershell
# Instalar nodemon para reinicio automático en desarrollo
npm install --save-dev nodemon

# O con la forma corta
npm install -D nodemon
```

### 4. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# MongoDB Connection String (Local)
MONGODB_URI=mongodb://localhost:27017/bocattovalley

# Puerto del servidor (opcional, por defecto 3014)
PORT=3014
```

**Para MongoDB Atlas (reemplaza con tus credenciales):**
```env
MONGODB_URI=mongodb+srv://TU_USUARIO:TU_PASSWORD@TU_CLUSTER.mongodb.net/bocattovalley
```

⚠️ **IMPORTANTE**: Nunca subas el archivo `.env` a GitHub. Agrega `.env` a tu `.gitignore`

### 5. Crear archivo .gitignore

```
# Dependencias
node_modules/

# Variables de entorno (¡MUY IMPORTANTE!)
.env

# Logs
*.log

# Runtime
.DS_Store
Thumbs.db
```

## 🎮 Comandos para Iniciar el Proyecto

### Desarrollo (con reinicio automático)
```powershell
npm run dev
```

### Producción
```powershell
npm start
```

### Inicio manual
```powershell
node index.js
```

## 🔗 Endpoints Disponibles

### Base URL
```
http://localhost:3014
```

### Rutas de Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/bocattovalley/products` | Obtener todos los productos |
| `GET` | `/bocattovalley/product/:productId` | Obtener producto por ID |
| `POST` | `/bocattovalley/product` | Crear nuevo producto |
| `PUT` | `/bocattovalley/product/:productId` | Actualizar producto |
| `DELETE` | `/bocattovalley/product/:productId` | Eliminar producto |

### Ruta de Prueba
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/` | Verificar que la API funciona |

## 📝 Ejemplos de Uso con Postman

### 1. Verificar que la API funciona
```
GET http://localhost:3014/
```

### 2. Obtener todos los productos
```
GET http://localhost:3014/bocattovalley/products
```

### 3. Obtener un producto específico
```
GET http://localhost:3014/bocattovalley/product/1
```

### 4. Crear un nuevo producto
```
POST http://localhost:3014/bocattovalley/product
Content-Type: application/json

{
  "productId": 1,
  "name": "Pizza Margherita",
  "description": "Pizza clásica con tomate, mozzarella y albahaca",
  "price": 15.99,
  "img": "https://example.com/pizza-margherita.jpg",
  "available": true,
  "category": "Pizza",
  "subcategory": "Vegetariana",
  "currentStock": 50,
  "ingredients": ["tomate", "mozzarella", "albahaca", "masa"],
  "nutritionalInfo": {
    "calories": 250,
    "protein": "12g",
    "carbs": "30g",
    "fat": "8g"
  },
  "allergens": ["gluten", "lactosa"],
  "spiceLevel": "suave",
  "preparationTime": 15,
  "tags": ["vegetariano", "popular"]
}
```

## 📁 Estructura del Proyecto

```
HM14-REST-BOCATTOVALLEY/
│
├── models/
│   └── product.js          # Modelo de producto (Mongoose)
│
├── routes/
│   └── productRoutes.js    # Rutas de productos
│
├── .env                    # Variables de entorno (crear)
├── .gitignore             # Archivos ignorados por Git
├── index.js               # Archivo principal del servidor
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## 🗃️ Modelo de Producto

```javascript
{
  productId: Number,          // ID único del producto (requerido)
  name: String,              // Nombre del producto (requerido)
  description: String,       // Descripción del producto
  price: Number,             // Precio (requerido)
  img: String,               // URL de la imagen
  available: Boolean,        // Disponibilidad (default: true)
  category: String,          // Categoría del producto
  subcategory: String,       // Subcategoría
  currentStock: Number,      // Stock actual (default: 0)
  creationDate: Date,        // Fecha de creación (automática)
  ingredients: [String],     // Lista de ingredientes
  nutritionalInfo: {         // Información nutricional
    calories: Number,
    protein: String,
    carbs: String,
    fat: String
  },
  allergens: [String],       // Lista de alérgenos
  spiceLevel: String,        // Nivel de picante
  preparationTime: Number,   // Tiempo de preparación (minutos)
  tags: [String],           // Etiquetas del producto
  updatedAt: Date           // Última actualización (automática)
}
```

## 🚨 Solución de Problemas Comunes

### Error: "Cannot GET /bocattovalley/products/3"
**Problema:** Estás usando la ruta incorrecta.
**Solución:** Para un producto específico usa `/product/:id` (singular), no `/products/:id`

### Error: "EADDRINUSE"
**Problema:** El puerto ya está en uso.
**Solución:** 
```powershell
# Cambiar el puerto en .env o matar el proceso
netstat -ano | findstr :3014
taskkill /PID [PID_NUMBER] /F
```

### Error: "MongooseError: Operation timeout"
**Problema:** No se puede conectar a MongoDB.
**Solución:** Verificar que MongoDB esté corriendo o que la URI en `.env` sea correcta.

### Error: "Cannot find module"
**Problema:** Dependencias no instaladas.
**Solución:** 
```powershell
npm install
```

## 🔧 Comandos Útiles en Terminal

### Comandos de Inicialización (proyecto nuevo)
```powershell
# Inicializar proyecto Node.js
npm init -y

# Instalar dependencias principales
npm install express mongoose dotenv

# Instalar nodemon para desarrollo
npm install -D nodemon
```

### Comandos de Desarrollo
```powershell
# Ver procesos en el puerto 3014
netstat -ano | findstr :3014

# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Limpiar cache de npm
npm cache clean --force

# Ver logs en tiempo real
npm run dev

# Instalar una dependencia específica
npm install nombre-del-paquete

# Desinstalar una dependencia
npm uninstall nombre-del-paquete
```

### Comandos de Git
```powershell
# Inicializar repositorio Git
git init

# Agregar archivos al staging
git add .

# Hacer commit
git commit -m "Mensaje del commit"

# Agregar remote origin
git remote add origin https://github.com/usuario/repositorio.git

# Subir cambios
git push -u origin main
```

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

**¡Happy Coding! 🚀**