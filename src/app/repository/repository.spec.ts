import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryComponent } from './repository';
import { Repository } from '../app';

describe('Repository', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  const mockRepository: Repository = {
    name: 'Test Repo',
    description: 'A sample repo',
    created_at: '2025-10-17T06:14:27Z',
    stargazers_count: 42,
    open_issues_count: 3,
    owner: {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.png',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    component.repository = mockRepository;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
