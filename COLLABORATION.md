# Team Collaboration Guidelines

Welcome to the Node.js Microservices Project! This document outlines best practices and guidelines for effective team collaboration.

## Table of Contents
- [Project Structure](#project-structure)
- [Branching Strategy](#branching-strategy)
- [Commit Messages](#commit-messages)
- [Pull Requests & Code Reviews](#pull-requests--code-reviews)
- [Environment Setup](#environment-setup)
- [Docker & RabbitMQ](#docker--rabbitmq)
- [Communication](#communication)
- [Issue Tracking](#issue-tracking)
- [Best Practices](#best-practices)

---

## Project Structure
- Each microservice is in its own directory (`user-service`, `post-service`, `shared`).
- Shared code (e.g., DB config) is in the `shared` directory.
- Use `.gitignore` and `.dockerignore` to keep the repo and Docker images clean.

## Branching Strategy
- Use `main` for production-ready code.
- Create feature branches: `feature/<feature-name>`
- Use `bugfix/<issue>` for bug fixes.
- Use `hotfix/<issue>` for urgent production fixes.

## Commit Messages
- Use clear, descriptive commit messages.
- Format: `<type>: <short description>`
  - Example: `feat: add RabbitMQ integration to user-service`
  - Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

## Pull Requests & Code Reviews
- Open a pull request (PR) for all changes to `main`.
- Request at least one review before merging.
- Address all comments and suggestions.
- Use draft PRs for work in progress.

## Environment Setup
- Use Node.js 18+ and Docker.
- Install dependencies with `npm install` in each service directory.
- Use `.env` files for local secrets (never commit them).
- Start all services with Docker Compose:
  ```bash
  docker-compose down --volumes && docker system prune -af && docker-compose up --build
  docker-compose down && docker system prune -af && docker-compose up --build(If ypu dont want to loose sql data)
  ```

## Docker & RabbitMQ
- All services are containerized and orchestrated with Docker Compose.
- RabbitMQ is used for event-driven communication between services.
- Use the provided healthchecks and `depends_on` for reliable startup.

## Communication
- Use team chat (e.g., Slack, Teams) for quick questions.
- Use GitHub Issues/Discussions for design, bugs, and planning.
- Document major decisions in this repo.

## Issue Tracking
- Use GitHub Issues to track bugs, features, and tasks.
- Assign issues and use labels for clarity.
- Reference issues in commits and PRs (e.g., `fixes #12`).

## Best Practices
- Write clean, modular, and well-documented code.
- Use environment variables for secrets and config.
- Write tests for new features and bug fixes.
- Keep dependencies up to date.
- Review and test your code before pushing.

---

Happy collaborating! 🚀 
