#!/bin/bash

# Obtém o diretório raiz do projeto
root=$(cd "$(dirname "$0")/.." && pwd -P)

# Define os comandos para iniciar o frontend e o backend
start_frontend="cd $root/client && pnpm dev"
start_backend="cd $root/server && npm start"

# Inicia os comandos em paralelo usando o concurrently
$root/server/node_modules/.bin/concurrently "$start_frontend" "$start_backend"
