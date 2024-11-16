import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Motorcycle } from '../models/motorcycle.model';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {
  private apiUrl = 'http://localhost:8080/motorcycles';

  constructor(private http: HttpClient) { }

  getMotorcyclesByOwnerId(ownerId: number): Observable<Motorcycle[]> {
    return this.http.get<Motorcycle[]>(`${this.apiUrl}/user/${ownerId}`);
  }
}
