import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  public data;
  constructor(public apiService:ApiService){
  this.apiService.getProducts().then((products)=>{
    this.data = products;
  })
}
public async getData(){
  this.data = await this.apiService.getProducts()
  return this.data
}
}