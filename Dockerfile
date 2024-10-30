FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html
COPY headerExtract.js /etc/nginx/headerExtract.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]