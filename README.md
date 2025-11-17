# GitHub Repositories List

Angular app that lists the most starred GitHub repositories created in the last 30 days. Infinite scroll loads more repositories as you scroll down. I implemented this app as part of a coding challenge.

## Tech
- Angular 20.3.9, TypeScript  
- Fetches data from the GitHub REST API (GET /search/repositories)
- Uses Fetch API - sufficient for simple GET requests, no extra dependencies, keeps the project lightweight
- Standalone components - modular and reusable
- CSS + Flexbox - simple responsive layout

## Run 
- Clone the GitHub repository to your machine and navigate to the project directory
- Run `npm install` and `ng serve`
- Open http://localhost:4200 in your browser
