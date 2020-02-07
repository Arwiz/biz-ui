import {Injectable} from '@angular/core';
import {Provider} from '../Model/Provider';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProviderListService {
  private elements: Provider[];

  private baseUrl = 'https://bizcredit.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseUrl + 'isps');
  }

  public downloadPdf(id): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Provider[]>(this.baseUrl + 'download/' + id,
      {headers, responseType: 'blob' as 'json'});
  }

  public getdata(): Provider[] {
    return this.elements;
  }

  public setProviders(data: Provider[]) {
    this.elements = data;
  }

  public fetchdetails(name: string): Provider {
    for (const prop in this.elements) {
      if (this.elements[prop].name === name) {
        return this.elements[prop];
      }
    }
  }
}

