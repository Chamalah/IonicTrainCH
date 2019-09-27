import { InvoicesService } from './../../services/invoices.service';
import { Component, OnInit } from '@angular/core';

import { Invoices } from 'src/app/models/invoices';

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.page.html',
  styleUrls: ['./invoices-list.page.scss'],
})
export class InvoicesListPage implements OnInit {

  invoiceslist : Invoices[];
  
  constructor(private invoicesServices: InvoicesService ,
              private router:Router,
              private storage:Storage) { }

  ngOnInit() {
    this.invoicesServices.getInvoices().subscribe(data => {
      this.invoiceslist = data;
      console.log(this.invoiceslist);
    })
    

  }
  ClickItem(id) {
    console.log(id);
    this.storage.set('id', id);
    this.router.navigate(['/app/invoices/view']);
  }


}



