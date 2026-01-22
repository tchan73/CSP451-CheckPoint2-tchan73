\# API Endpoints



\## Overview

This branch adds a basic REST API structure using Express and route files.



\## Endpoints

\- GET /api/health – returns server status and uptime

\- GET /api/users – returns all users

\- POST /api/users – creates a user (name + email required)



\## Why this exists

Separating routes keeps the main server file small and easier to maintain.



