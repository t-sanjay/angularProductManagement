import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import {MessageService} from 'primeng/api';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [MessageService]
})
export class AddproductComponent implements OnInit {

  @Output() dataAddedsSuccess = new EventEmitter<boolean>();
  
  profileForm = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    code: new FormControl(null,Validators.required),
    price: new FormControl(null,Validators.required),
    rating: new FormControl(),
    categoryName: new FormControl(null,Validators.required),
  })
  constructor(private productService : ProductService, private messageService : MessageService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.profileForm.valid){
      if(this.profileForm.value.rating == null){
        this.profileForm.value.rating = 1;
      }
      var productData = {
        ProductName: this.profileForm.value.productName,
        Price: this.profileForm.value.price,
        Code: this.profileForm.value.code,
        CategoryId: this.profileForm.value.categoryName,
        rating: this.profileForm.value.rating
      }
      this.productService.addProduct(productData).subscribe(res =>{
        console.log(res);
        this.callParent(res);
      });
    }
  }

  callParent(data : any){
    this.dataAddedsSuccess.emit(data);
  }
}
