#!/bin/sh
echo "==> Building App"
ng build --prod

echo "==> Running Tests"
ng test --code-coverage

echo "==> Building Docker Image"
docker build -t next-stock:latest .
