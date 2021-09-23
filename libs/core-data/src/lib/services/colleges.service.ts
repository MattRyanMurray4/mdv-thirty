import { HttpClient } from '@angular/common/http';
import { College } from '@make-app/api-interfaces';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CollegesService {
  private model = 'search?country=United+States';
  constructor(private http: HttpClient) {}

  all(): Observable<College[]> {
    return this.http.get<College[]>(this.getApi());
  }

  find(id: string): Observable<College> {
    return this.http.get<College>(this.getApiById(id));
  }

  private getApi() {
    return `${environment.apiUrl}/${this.model}`;
  }
  private getApiById(id: string) {
    return `${this.getApi()}${id}`;
  }
}
