#!/bin/bash

npx prisma db push --force-reset

if [ $? -eq 0 ]; then
    echo "Database updated successfully. Running the server 🚀"

    node dist/src/infrastructure/main.js
else
    echo "Error updating database. Server will not start."
fi
