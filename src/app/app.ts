import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  repositories: Repository[] = [];
  apiPage = 1;
  isLoading = false;
  hasMore = true;

  ngOnInit() {
    this.fetchRepositories();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isLoading) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const contentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= contentHeight - 100) {
      this.fetchRepositories();
    }
  }

  fetchRepositories() {
    this.isLoading = true;

    fetch(
      `https://api.github.com/search/repositories?q=created:>2025-10-13&sort=stars&order=desc&page=${this.apiPage}`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.repositories.push(...data.items);

        if (data.items && data.items.length > 0) {
          this.repositories.push(...data.items);
          this.apiPage++;
        } else {
          this.hasMore = false;
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.isLoading = false;
      });
  }
}
