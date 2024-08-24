import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

const BASE_URL = "http://dev.ecommerce.com/category"

@Injectable()
export class WebService
{
    constructor(private httpclient: HttpClient) { }

    getCategoryList(): Observable<any> {
        return this.httpclient.get(BASE_URL)
    }

    
}