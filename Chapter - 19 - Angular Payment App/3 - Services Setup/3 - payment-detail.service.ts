import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from "../models/payment-detail.model";

@Injectable({
    providedIn: 'root'
})
export class PaymentDetailService {

    constructor(private http: HttpClient) {}

    readonly baseURL = "http://localhost:8080/paymentdetails";
    
    formData: PaymentDetail = new PaymentDetail();

    list?: PaymentDetail[];

    postPaymentDetail() {
        return this.http.post(this.baseURL, this.formData);
    }

    putPaymentDetail() {
        return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData);
    }

    deletePaymentDetail(id: number | undefined) {
        return this.http.delete(`${this.baseURL}/${id}`);
    }
    
    refreshList() {
        this.http.get(this.baseURL)
        .toPromise()
        .then(res => this.list = res as PaymentDetail[]);
    }
}