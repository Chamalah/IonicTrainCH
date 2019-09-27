import { Component, OnInit } from '@angular/core';
import { InvoicesItem } from 'src/app/models/invoices';
import { InvoicesService } from 'src/app/services/invoices.service';
import { NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-invoices-view',
  templateUrl: './invoices-view.page.html',
  styleUrls: ['./invoices-view.page.scss'],
})
export class InvoicesViewPage implements OnInit {


  invoicesdetail: any[] = [];

  constructor(private invoicesServices: InvoicesService,
    private storage: Storage) {

  }

  ngOnInit() {
    this.storage.get('id').then((val) => {
      console.log('id', val);
      this.invoicesServices.getInvoicesById(val).subscribe(data => {
        this.invoicesdetail.push(data);
        console.log(this.invoicesdetail);
      })
    });
}

}
