import { Injectable, inject } from '@angular/core';
import { environment } from '../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../Interfaces/compra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private urlApi: string = environment.apiEndpoint + 'compras';
  constructor(private http: HttpClient) { }

  // Método: GET para obtener todos
  getAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.urlApi);
  }

  // Método GET para obtener por ID
  getById(id: number): Observable<Compra> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<Compra>(url);
  }

  // Método POST para crear
  create(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.urlApi, compra);
  }

  // Método PUT para actualizar
  update(id: number, compra: Compra): Observable<Compra> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<Compra>(url, compra);
  }

  // Método DELETE para eliminar por ID
  delete(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete(url);
  }
}
