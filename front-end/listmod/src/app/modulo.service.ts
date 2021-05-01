import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class ModuloService {

  constructor(private http: HttpClient) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:8081/modulos')
      .toPromise();
  }

}
