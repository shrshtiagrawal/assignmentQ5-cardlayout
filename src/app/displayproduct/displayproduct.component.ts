import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

  productName: string = "";
  discription: string = "";
  companyName: string = "";
  productPath: String="";

  products: any[] = [
    { name: 'phone', discription: 'price :  10000', company: 'Electronics Manufacturer.',path: 'assets/images/phone.png' },
    { name: 'camera', discription: 'price :  43000', company: 'Electronics Manufacturer.',path:'assets/images/cameera.png'},
    { name: 'microphone', discription: 'price : 5000', company: 'Electronics Manufacturer.',path:'assets/images/microphone.png' },
    { name: 'AC', discription: 'price :45000', company: 'Electronics Manufacturer.',path:'assets/images/ac.png' },
  ]
  constructor() {
    this.productName = this.products[0].name;
    this.discription = this.products[0].discription;
    this.companyName = this.products[0].company;
    this.productPath=this.products[0].path; 
  }

  ngOnInit(): void {
  }
  onClick(name) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name == name) {
        this.productName = this.products[i].name;
        this.discription = this.products[i].discription;
        this.companyName = this.products[i].company;
        this.productPath=this.products[i].path;
      }
    }

  }
}