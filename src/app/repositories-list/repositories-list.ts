import { Component, Input } from '@angular/core';
import { Repository } from '../app';
import { RepositoryComponent } from '../repository/repository';

@Component({
  selector: 'app-repositories-list',
  imports: [RepositoryComponent],
  templateUrl: './repositories-list.html',
  styleUrl: './repositories-list.css',
})
export class RepositoriesList {
  @Input() repositories!: Repository[];
}
