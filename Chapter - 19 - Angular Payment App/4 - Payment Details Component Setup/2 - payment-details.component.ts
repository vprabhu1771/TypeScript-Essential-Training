import { Component, OnInit } from '@angular/core';

import { PaymentDetail } from '../models/payment-detail.model';

import { PaymentDetailService } from '../services/payment-detail.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(selectedRecord: PaymentDetail)
  {
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deletePaymentDetail(selectedRecord.paymentDetailId)
      .subscribe(
        res => { 
          this.service.refreshList();
          this.toastr.error("Deleted Successfully","Payment Detail Register");
        },
        err => { console.log(err); }
      );
    }
  }

}
