import { Invoices, InvoicesItem } from './../models/invoices';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient,
    private storage: StorageService) { }

 
  getInvoices(): Observable<Invoices[]> {
    return this.http.get<Invoices[]>(this.baseUrl + '/invoices');
  }

  getInvoicesById(id: number): Observable<InvoicesItem> {
    return this.http.get<InvoicesItem>(`${this.baseUrl}/invoices/${id}`);
  }
}
