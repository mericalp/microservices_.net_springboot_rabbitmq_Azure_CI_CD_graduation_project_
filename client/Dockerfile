FROM node:14 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
# RUN npm run build 
CMD ["npm", "start"]

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# RUN npm install -g serve
# CMD [ "serve", "-s", "build", "-l", "80" ]

