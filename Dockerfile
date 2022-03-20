FROM node:12.16.1-alpine3.9 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
ARG REACT_APP_API_URL=https://openbanking.k3s.bangun-kreatif.com
ENV REACT_APP_API_URL $REACT_APP_API_URL
RUN yarn
COPY . /app
RUN yarn build

# stage 2 - build the final image and copy the react build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]