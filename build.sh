#!/bin/sh
echo "==> Building App"
ng build --prod

echo "==> Running Tests"
ng test --code-coverage

echo "==> Building Docker Image"
docker build --no-cache -t next-stock:latest .

# echo="==> Run Containter with the app"
# docker run -it --rm -d -p 8080:80 --name web next-stock:latest
