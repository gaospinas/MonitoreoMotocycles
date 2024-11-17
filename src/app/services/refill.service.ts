import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Refill } from '../models/refill.model';

@Injectable({
  providedIn: 'root'
})
export class RefillService {
  private apiUrl = 'http://localhost:8080/refills';

  constructor(private http: HttpClient) { }

  getRefillsByMotorcycleId(motorcycleId: number): Observable<Refill[]> {
    return this.http.get<Refill[]>(`${this.apiUrl}/motorcycle/${motorcycleId}`);
  }

  addRefill(refill: Refill): Observable<Refill> {
    return this.http.post<Refill>(`${this.apiUrl}/refills`, refill);
  }
}
