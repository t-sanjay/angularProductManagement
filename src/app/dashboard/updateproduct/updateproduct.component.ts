import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  @Input() productDetails: any;
  @Output() dataUpdateSuccess = new EventEmitter<boolean>();

  profileForm = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    code: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    rating: new FormControl(),
    categoryName: new FormControl(null, Validators.required),
  });

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.profileForm.setValue({
      productName: this.productDetails.productName,
      code: this.productDetails.code,
      price: this.productDetails.price,
      rating: this.productDetails.rating,
      categoryName: this.productDetails.categoryName,
    });
    console.log(this.productDetails)
  }


  onSubmit() {
    if (this.profileForm.valid) {
      if (this.profileForm.value.rating == null) {
        this.profileForm.value.rating = 1;
      }
      var productData = {
        ProductName: this.profileForm.value.productName,
        Price: this.profileForm.value.price,
        Code: this.profileForm.value.code,
        CategoryId: this.productDetails.categoryId,
        rating: this.profileForm.value.rating,
        ProductId: this.productDetails.productId
      }
      console.log(productData);
      this.productService.updateProduct(productData).subscribe(res => {
        this.callParent(res);
      });      
    }
  }

  callParent(data : any){
    this.dataUpdateSuccess.emit(data);
  }

}
