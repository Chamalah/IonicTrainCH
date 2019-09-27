import { Quotation } from 'src/app/models/quotation';
import { QuotationsService } from './../../services/quotations.service';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.page.html',
  styleUrls: ['./quotation-list.page.scss'],
})
export class QuotationListPage implements OnInit {

  header: any;
  detail: any;
  quotationList : Quotation[];
  constructor(private quotationService: QuotationsService) 
  { }

  ngOnInit() {
    this.quotationService.getQuotations().subscribe(data => {
      this.quotationList = data;
    })
    ;
  }

  
}
