FROM nginx:stable-alpine

COPY dist /usr/share/nginx/html

# ADD THIS LINE 👇 (important fix)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
