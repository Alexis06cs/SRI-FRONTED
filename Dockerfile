# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos de build al directorio de NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar el archivo de configuración de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 8080
EXPOSE 8080

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
