# Etapa 1: Construcción de la aplicación
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar los archivos de 'dist' (construidos por Vite) al directorio público de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 8080 para Cloud Run
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
