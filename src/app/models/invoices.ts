export class Invoices {
    id: number;
    invoiceNo: string;
    invoiceDate: Date;
    customerId: number;
    remark: string;
    subtotal: number;
        vat: number;
    discount: number;
    grandTotal: number;
    invoicesItem: InvoicesItem[];
}

export class InvoicesItem {
    id: number;
    invoiceId: number;
    lineNo: number;
    itemId: number;
    description: string;
    qty: number;
    uom: string;
    unitPrice: number;
    discount:number;
    vatId : number;
    lineTotal : number;
}

