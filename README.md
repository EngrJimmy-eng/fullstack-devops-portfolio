Full-Stack DevOps Portfolio

A production-oriented full-stack portfolio application built with React, Node.js, Express, and MySQL, containerized with Docker and served through Nginx.

The project combines full-stack web development with practical DevOps, security, testing, containerization, and cloud deployment concepts.

Architecture

                         Internet
                            │
                            ▼
                    ┌───────────────┐
                    │     Nginx     │
                    │ Reverse Proxy │
                    └───────┬───────┘
                            │
                 ┌──────────┴──────────┐
                 │                     │
                 ▼                     ▼
          React Frontend        Express Backend
          Container :80         Container :5000
                                       │
                                       ▼
                                  MySQL 8
                                  Container
                                       │
                                       ▼
                               Persistent Volume

                 Docker Network: ikenna-net

                 AWS CloudWatch Logs
                 ┌──────┼──────┐
                 ▼      ▼      ▼
               Nginx  Backend  Frontend
                        │
                       MySQL

Project Overview

This application is designed as a personal developer portfolio while also serving as a practical demonstration of modern software engineering and DevOps practices.

The application provides:

- Portfolio project presentation
- Project detail pages
- Contact form
- User registration and authentication
- JWT-based authentication
- Protected admin functionality
- Admin dashboard
- Backend API
- MySQL persistence
- Responsive React interface
- API communication using Axios

The application is containerized so that the frontend, backend, database, and reverse proxy can run as separate services.

Technology Stack

Frontend

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- Framer Motion
- Vitest
- React Testing Library
- ESLint

Backend

- Node.js
- Express
- MySQL
- mysql2
- JWT
- bcryptjs
- Helmet
- CORS
- Morgan
- Winston
- Jest
- Supertest

Infrastructure & DevOps

- Docker
- Docker Compose
- Nginx
- AWS
- CloudWatch Logs
- Containerized MySQL
- Persistent Docker volumes
- Environment-based configuration

Application Features

Portfolio

The frontend provides a portfolio interface for presenting:

- Professional profile
- Projects
- Project details
- Full-stack development work
- Cloud and DevOps projects
- Contact information

Project data is organized in the frontend project data layer.

Contact System

Visitors can submit messages through the contact interface.

The request is sent from the React frontend to the Express backend through the configured API client.

Authentication

The backend implements authentication functionality using:

- Password hashing with bcryptjs
- JSON Web Tokens
- Authentication middleware
- Protected routes

Authentication-related endpoints include registration and login functionality.

Admin Dashboard

The application contains a protected admin area.

The backend provides administrative routes while the frontend contains:

frontend/src/admin/Login.jsx
frontend/src/admin/Dashboard.jsx

Authentication state is handled through the frontend authentication utilities.

API Structure

The backend follows a route/controller structure.

backend/
├── controllers/
│   └── contactController.js
│
├── middleware/
│   ├── auth.js
│   └── logger.js
│
├── routes/
│   ├── admin.js
│   ├── contact.js
│   ├── login.js
│   └── register.js
│
├── config/
│   └── db.js
│
├── app.js
└── server.js

The API includes functionality for:

- User registration
- User login
- Contact messages
- Administrative operations
- Authentication-protected requests

Security

Security is incorporated at multiple application layers.

Backend Security

The Express application uses:

- Helmet for HTTP security headers
- bcryptjs for password hashing
- JWT authentication
- Authentication middleware
- CORS configuration
- Environment variables for configuration

Nginx Security

The reverse proxy configuration:

- Restricts direct access to hidden files
- Proxies frontend requests
- Proxies "/api/" requests to the backend
- Adds forwarded request headers

Example:

/api/*  →  Express backend
/*      →  React frontend

Secrets

Sensitive configuration should be supplied through environment variables.

Never commit real passwords, JWT secrets, database credentials, AWS credentials, or other secrets to GitHub.

Docker Architecture

The application is composed of four main services:

nginx
frontend
backend
mysql

All services communicate through the Docker network:

ikenna-net

The MySQL service uses a persistent Docker volume:

mysql-data

This allows database data to persist when the MySQL container is recreated.

Docker Compose

Start the application stack with:

docker compose up -d --build

Check running containers:

docker compose ps

View logs:

docker compose logs

View logs for an individual service:

docker compose logs backend
docker compose logs frontend
docker compose logs nginx
docker compose logs mysql

Stop the application:

docker compose down

To stop the containers while keeping the database volume:

docker compose down

To remove the database volume as well, use caution:

docker compose down -v

This permanently removes the Docker-managed MySQL volume.

Environment Configuration

The backend uses environment-based configuration.

Create:

backend/.env

Example structure:

DB_HOST=mysql
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=ikenna_db
JWT_SECRET=your_jwt_secret

Use secure values appropriate for your environment.

Do not commit ".env" files containing secrets.

Testing

Testing is implemented across both frontend and backend components.

Backend Tests

The backend uses:

- Jest
- Supertest

Tests cover areas including:

controllers
middleware
routes
application behavior
authentication
logging

Run backend tests:

cd backend
npm test

Run tests in watch mode:

npm run test:watch

Frontend Tests

The frontend uses:

- Vitest
- React Testing Library
- jsdom
- Testing Library Jest DOM
- User Event

Run frontend tests:

cd frontend
npm test

Run tests once:

npm run test:run

Frontend Linting

npm run lint

Frontend Build

Build the production frontend:

cd frontend
npm run build

Preview the production build:

npm run preview

Project Structure

fullstack-devops-portfolio/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── contactController.test.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── auth.test.js
│   │   ├── logger.js
│   │   └── logger.test.js
│   │
│   ├── routes/
│   │   ├── admin.js
│   │   ├── admin.test.js
│   │   ├── contact.js
│   │   ├── contact.test.js
│   │   ├── login.js
│   │   ├── login.test.js
│   │   ├── register.js
│   │   └── register.test.js
│   │
│   ├── tests/
│   │   └── app.test.js
│   │
│   ├── Dockerfile
│   ├── app.js
│   ├── server.js
│   ├── jest.config.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── tests
│   │
│   ├── Dockerfile
│   ├── nginx/
│   ├── vite.config.js
│   └── package.json
│
├── nginx/
│   ├── Dockerfile
│   └── default.conf
│
├── docker-compose.yml
├── .dockerignore
└── .gitignore

DevOps Practices Demonstrated

This project demonstrates practical experience with:

- Docker containerization
- Docker Compose orchestration
- Multi-container application architecture
- Nginx reverse proxy
- Service-to-service networking
- Persistent container storage
- Environment configuration
- Application logging
- AWS CloudWatch log integration
- Backend and frontend automated testing
- Security middleware
- Authentication
- Production-oriented application structure

Cloud Logging

The Docker Compose configuration is prepared to send container logs to AWS CloudWatch Logs using the AWS Logs Docker logging driver.

Separate log streams are configured for:

ikenna-nginx
ikenna-backend
ikenna-frontend
ikenna-mysql

This provides a foundation for centralized application and infrastructure observability in AWS.

Development Workflow

A typical development workflow for this project is:

Develop
   │
   ▼
Run Tests
   │
   ▼
Build Frontend
   │
   ▼
Build Docker Images
   │
   ▼
Run Docker Compose
   │
   ▼
Validate Application
   │
   ▼
Security Scanning
   │
   ▼
Deploy

Local Development

Backend

cd backend
npm install
npm start

Frontend

cd frontend
npm install
npm run dev

For the complete containerized environment:

docker compose up -d --build

Future DevOps Enhancements

Potential extensions to the project include:

- GitHub Actions CI/CD pipeline
- Automated Docker image publishing
- Trivy container vulnerability scanning
- Playwright end-to-end testing
- Automated deployment
- Kubernetes/K3s deployment
- Infrastructure provisioning with Terraform
- Additional CloudWatch dashboards and alarms
- HTTPS/TLS configuration
- Production secrets management

Learning Objectives

This project was built to demonstrate the integration of software development and DevOps practices rather than treating them as separate disciplines.

It provides practical experience with:

- Full-stack application development
- REST API development
- Authentication and authorization
- Database integration
- Automated testing
- Containerization
- Reverse proxy configuration
- Application security
- Logging and observability
- Cloud infrastructure concepts
- Deployment automation

Author

Ikenna Ndumele

Full-Stack Developer | Cloud & DevOps Engineer

GitHub: "EngrJimmy-eng"

---

License

This project is available for portfolio and educational purposes.
