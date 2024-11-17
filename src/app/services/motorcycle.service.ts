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

  addMotorcycle(motorcycle: Motorcycle): Observable<Motorcycle> {
    return this.http.post<Motorcycle>(this.apiUrl, motorcycle);
  }

  updateMotorcycle(motorcycle: Motorcycle): Observable<Motorcycle> {
    return this.http.put<Motorcycle>(`${this.apiUrl}/${motorcycle.id}`, motorcycle);
  }

  deleteMotorcycle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
