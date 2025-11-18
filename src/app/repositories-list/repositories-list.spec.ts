import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoriesList } from './repositories-list';
import { Repository } from '../app';

describe('RepositoriesList', () => {
  let component: RepositoriesList;
  let fixture: ComponentFixture<RepositoriesList>;

  const mockRepositories: Repository[] = [
    {
      name: 'Test Repo 1',
      description: 'Description 1',
      created_at: '2025-10-17T06:14:27Z',
      stargazers_count: 10,
      open_issues_count: 2,
      owner: {
        login: 'user1',
        avatar_url: 'https://example.com/avatar1.png',
      },
    },
    {
      name: 'Test Repo 2',
      description: 'Description 2',
      created_at: '2025-10-18T06:14:27Z',
      stargazers_count: 5,
      open_issues_count: 1,
      owner: {
        login: 'user2',
        avatar_url: 'https://example.com/avatar2.png',
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoriesList],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoriesList);
    component = fixture.componentInstance;
    component.repositories = mockRepositories;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
