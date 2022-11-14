# build environment
# FROM node:13.12.0-alpine as build
# WORKDIR /app
# COPY . .
# RUN yarn
# RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY public /usr/share/nginx/html
COPY public/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]