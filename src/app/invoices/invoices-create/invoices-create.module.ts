import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvoicesCreatePage } from './invoices-create.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicesCreatePage]
})
export class InvoicesCreatePageModule {}
