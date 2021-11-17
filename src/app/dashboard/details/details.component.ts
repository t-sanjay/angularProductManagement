import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() productDetails: any;
  productName : any;
  productId : any;
  price : any;
  code : any;
  categoryId : any;
  categoryName : any;
  rating : any;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){
    console.log(this.productDetails);
    this.productName = this.productDetails.productName;
    this.categoryName = this.productDetails.categoryName;
    this.code = this.productDetails.code;
    this.price = this.productDetails.price;
    this.rating = this.productDetails.rating;

  }


}
