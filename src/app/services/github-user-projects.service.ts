import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GithubUserProject } from './github-types';

@Injectable({
  providedIn: 'root'
})
export class GithubUserProjectsService {

  constructor(private http: HttpClient) {}

  listUserProjects(username: string): Observable<GithubUserProject[]> {
    const url = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    return this.http.get<GithubUserProject[]>(url)
      .pipe(
        catchError((error) => throwError(error))
      );
  }

}
