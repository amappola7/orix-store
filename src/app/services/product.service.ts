import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url: string = 'https://fakestoreapi.com/products';

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url)
    .pipe(
      tap(() => console.log('Petition get products succesful')),
      catchError((error) => {
        console.log(`Error in the get products petition`);
        return of(error);
      })
    )
  }

  getProductById(id: number): Observable<IProduct> {
    return this._http.get<IProduct>(`${this._url}/${id}`)
    .pipe(
      tap(() => console.log(`Get product by id succesful. Fetched product: ${id}`)),
      catchError((error) => {
        console.log(`Error in the get products petition`);
        return of(error);
      })
    )
  }
}
