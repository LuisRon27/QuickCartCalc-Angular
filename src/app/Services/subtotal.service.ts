// subtotal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subtotal } from '../Interfaces/subtotal';
import { environment } from '../Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubtotalService {
  private urlApi: string = environment.apiEndpoint + 'subtotal';

  constructor(private http: HttpClient) {}

  getSubtotal(): Observable<Subtotal> {
    return this.http.get<Subtotal>(`${this.urlApi}/totalcantidad`);
  }

  truncateCompras(): Observable<string> {
    const url = `${this.urlApi}/truncatecompras`;
    return this.http.delete(url, { responseType: 'text' });
  }
  
}
