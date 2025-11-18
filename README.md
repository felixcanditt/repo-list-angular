# GitHub Repositories List

Angular app that lists the most starred GitHub repositories created in the last 30 days. Infinite scroll loads more repositories as you scroll down.

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

## First test run

```
Application bundle generation failed. [5.781 seconds] - 2025-11-18T09:46:53.081Z

X [ERROR] TS2459: Module '"./repository"' declares 'Repository' locally, but it is not exported. [plugin angular-compiler]

    src/app/repository/repository.spec.ts:3:9:
      3 │ import { Repository } from './repository';                                                                                                                                                                                                                                                                
        ╵          ~~~~~~~~~~                                                                                                                                                                                                                                                                                       

  'Repository' is declared here.

    src/app/repository/repository.ts:2:9:
      2 │ import { Repository } from '../app';                                                                                                                                                                                                                                                                      
        ╵          ~~~~~~~~~~                                                                                                                                                                                                                                                                                       
```
