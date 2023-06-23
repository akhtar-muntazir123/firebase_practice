import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data;

 
  constructor(public apiService:ApiService){
  this.apiService.getProducts().then((products)=>{
    this.data = products;
    console.log(products)
  })
}
public async collect(pId)
{

  console.log("product id",pId)
  localStorage.setItem('pId',JSON.stringify(pId))


  // window.location.href="/checkout-page";
    // const check=  localStorage.setItem('productId', JSON.stringify(this.pId));
    // console.log(check)
}

}
