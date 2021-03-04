FROM nginx:stable-alpine
LABEL maintainer="Victor Augusto <victor.silva452@outlook.com>"

COPY dist/ /usr/share/nginx/html

# RUN chown nginx -R /usr/share/nginx/html

# USER nginx
CMD ["nginx", "-g", "daemon off;"]
