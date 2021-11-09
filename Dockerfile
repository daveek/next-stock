FROM  nginxinc/nginx-unprivileged:1.20.1-alpine

USER root

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

USER nginx

EXPOSE 8080

## Copy our default nginx config
COPY --chown=nginx:nginx nginx/default.conf /etc/nginx/conf.d/

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --chown=nginx:nginx dist/next-stock /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
