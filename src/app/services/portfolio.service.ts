import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { Job, Project } from '../models/portfolio.model';
//import { MOCK_JOBS, MOCK_PROJECTS } from '@app/mocks/portfolio.mock';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private http = inject(HttpClient);
  private readonly baseUrl = '/api';

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/jobs`);
    // return of(MOCK_JOBS).pipe(delay(500));
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
    // return of(MOCK_PROJECTS).pipe(delay(500));
  }
}
