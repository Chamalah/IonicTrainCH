import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';


const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'create',
          loadChildren: () =>
            import('./invoices-create/invoices-create.module').then(
              m => m.InvoicesCreatePageModule
            )
        },
        {
          path: 'view',
          canActivate: [AuthGuard],
          loadChildren: () =>
            import('./invoices-view/invoices-view.module').then(
              m => m.InvoicesViewPageModule
            )
        },
        {
          path: 'list',
          canActivate: [AuthGuard],
          loadChildren: () =>
            import('./invoices-list/invoices-list.module').then(
              m => m.InvoicesListPageModule
            )
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InvoicesRoutingModule { }
