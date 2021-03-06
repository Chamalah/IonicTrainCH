import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuotationsService } from 'src/app/services/quotations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.page.html',
  styleUrls: ['./quotation-create.page.scss'],
})
export class QuotationCreatePage implements OnInit {

  quotationForm: FormGroup;
  products: [{ productId: 1, productName: 'prod-1' }, { productId: 2, productName: 'prod-2' }];
  qoutationHeader: any;
  qoutationDetail: any;
  // Property
  get quotationLines(): FormArray {
    return this.quotationForm.get('quotationItems') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private qtService: QuotationsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.quotationForm = this.fb.group({
      quotationNo: ['', Validators.required],
      quotationDate: ['', Validators.required],
      customer: ['0', Validators.required],
      expireDate: ['', Validators.required],
      paymentTerm: '0',
      referenceNo: '',
      pic: '',
      subtotal: [0, Validators.required],
      otherCharges: [0, Validators.required],
      vat: [0, Validators.required],
      grandTotal: [0, Validators.required],
      quotationItems: this.fb.array([this.createQuotationItems()])

    });
  }
  createQuotationItems(): FormGroup {
    return this.fb.group({
      productId: [0, Validators.required],
      productName: ['', Validators.required],
      qty: [0, Validators.required],
      unitPrice: [0, Validators.required],
      discount: [0, Validators.required],
      lineTotal: [0, Validators.required]
    });
  }

  addItem() {
    this.quotationLines.push(this.createQuotationItems());
  }
  removeItem(i: number) {
    this.quotationLines.removeAt(i);
  }

  GetProductInfo(ctrl: HTMLInputElement, quotationLine) {

  }

  calculateLineTotal(line: AbstractControl) {

  }

  submit(quotationForm: FormGroup) {
    this.qoutationHeader = quotationForm.value;
    var arrayControl = this.quotationForm.get('quotationItems') as FormArray;
    this.qoutationDetail = arrayControl.value;

    this.qtService.SaveQoutation(this.qoutationHeader, this.qoutationDetail).subscribe(data => {
      console.log("test");
      //this.router.navigateByUrl('quotation-view');
      console.log(data);
    });


  }


}
