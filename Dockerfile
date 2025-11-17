# building static react website in the first stage and using the result in the second (permanent) one to reduce a lot the size
FROM alpine:3.19 AS build
RUN apk update
RUN apk add --no-cache nodejs npm
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

RUN ls -la /
RUN ls -la /app

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]