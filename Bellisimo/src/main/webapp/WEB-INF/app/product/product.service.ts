import { Injectable } from '@angular/core';
import { Http, Response,Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {

  //URLS


  url = "http://localhost:8080/data/allproducts";
  urlAdd ="http://localhost:8080/data/product/add";
  urlSingle = "http://localhost:8080/data/product/";

  //constructor
  constructor(private http:Http) { }

  //Fetch all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);

  }
  //Create product
  createProduct(product: Product):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.urlAdd, product, options)
      .map(success => success.status)
      .catch(this.handleErrorObservable);
  }
  //Fetch product by id
  getProductById(productId: string): Observable<Product> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.urlSingle+ productId);
    return this.http.get(this.urlSingle + productId)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  //Update product
  updateProduct(product: Product):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.urlSingle+ product.id, product, options)
      .map(success => success.status)
      .catch(this.handleErrorObservable);
  }
  //Delete product
  deleteProductById(productId: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.delete(this.urlSingle+ productId)
      .map(success => success.status)
      .catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
