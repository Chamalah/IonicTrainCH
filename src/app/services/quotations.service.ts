import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { of, from } from 'rxjs';
import { Observable } from 'rxjs';
import { Quotation } from '../models/quotation';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  baseUrl = environment.baseUrl;
  H: any;
  D:any;
  
  constructor(private http: HttpClient,
    private storage: StorageService) { }

  addQuotaion(quotation): Observable<Quotation> {
    return this.http.post<Quotation>(this.baseUrl + '/quotations', quotation);
  }

  updateQuotation(quotation): Observable<Quotation> {
    return this.http.put<Quotation>(`${this.baseUrl}/quotations/${quotation.id}`, quotation);
  }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(this.baseUrl + '/quotations');
  }

  getQuotationById(id: number): Observable<Quotation> {
    return this.http.get<Quotation>(`${this.baseUrl}/quotations/${id}`);
  }


  SaveQoutation(header: any, detail: any) {
    this.storage.remove('qtheader');
    this.storage.remove('qdetail');
    const result = this.storage.set('qtheader', header).then(() => {
      this.storage.set('qdetail', detail);
    },
      error => {
        console.error('Error Registration. ', error);
        return null;
      });
    return from(result);
  }


  getQuotationsNew(qtheader: any, qdetail: any) {
    this.storage.get('qtheader').then((val) => {
      this.H = val;
    });
    return of(this.H);
  }
}
