# REST API Backend – Node.js & Express

Este proyecto es una API REST desarrollada con Node.js y Express como parte de un curso práctico de backend.  
El objetivo principal es comprender la arquitectura básica de una API, el manejo de rutas, controladores, modelos y la persistencia de datos utilizando SQLite.

La API implementa operaciones CRUD para la gestión de productos, siguiendo una estructura modular y organizada.

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- JavaScript
- SQLite
- npm
- Thunder Client (extensión de VS Code para pruebas de API)
- Git & GitHub

---

## 📂 Estructura del proyecto

apirest
│

├── controllers/

│ └── productosController.js

│

├── db/

│ └── database.js

│


├── models/

│ └── producto.js

│

├── routes/

│ └── productos.js

│

├── database.sqlite

├── createTable.js

├── index.js

├── package.json


├── package-lock.json

├── test.js

├── .gitignore

└── node_modules/


### 📌 Descripción de carpetas
- **controllers**: Contiene la lógica de negocio de los endpoints.
- **models**: Define la estructura del modelo de datos.
- **routes**: Define las rutas y endpoints de la API.
- **db**: Maneja la conexión a la base de datos SQLite.
- **index.js**: Archivo principal para ejecutar la aplicación.

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   
git clone https://github.com/justYasha/apirest-backend.git


Instalar dependencias:

npm install
npm i sqlite3
npm i express
npm i express json

Crear la base de datos (si es necesario):

node createTable.js


Ejecutar el servidor:

node index.js


El servidor se ejecutará en el puerto configurado en el proyecto.

📡 Endpoints principales

Ejemplo de endpoints disponibles:

GET /productos

GET /productos/:id

POST /productos

PUT /productos/:id

DELETE /productos/:id

Las pruebas de los endpoints se realizaron utilizando Thunder Client desde Visual Studio Code.

🧪 Pruebas

Pruebas manuales de endpoints usando Thunder Client.

Validación de respuestas HTTP y operaciones CRUD.

📚 Aprendizajes clave

Creación de APIs REST con Node.js y Express.

Separación de responsabilidades usando controllers, routes y models.

Conexión y manejo de base de datos SQLite.

Uso de npm para la gestión de dependencias.

Control de versiones con Git.

📈 Posibles mejoras

Implementar validaciones de datos.

Manejo centralizado de errores.

Agregar pruebas automatizadas.

Documentación de la API con Swagger.

👩‍💻 Autora

Yasha 🌒
