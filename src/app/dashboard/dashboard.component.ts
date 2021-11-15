import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product.service';
import { product } from '../_models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  products!: product[];
  display: boolean = false;
  displayUpdate : boolean = false;
  toBeUpdateProduct : any;

  constructor(private productservice: ProductService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(res => {
      this.allProducts(res);
    });
  }

  allProducts(data: product[]) {
    this.products = data;
    console.log(this.products)
  }

  showDialog() {
    this.display = true;
  }

  closeDialog(data: any) {
    console.log(data);
    this.messageService.add({ severity: 'success', summary: 'Product Added' });
    this.productservice.getAllProducts().subscribe(res => {
      this.allProducts(res);
    });
    this.display = !data;
  }

  updateCloseDialog(data : any){
    this.messageService.add({ severity: 'success', summary: 'Product Updated' });
    this.productservice.getAllProducts().subscribe(res => {
      this.allProducts(res);
    });
    this.displayUpdate = !data;
  }


  updateDialogDisplay(productData : any){
    this.displayUpdate = true;
    this.toBeUpdateProduct = productData;
  }


  delete(data:any){
    this.productservice.deleteProduct(data).subscribe(res => {
      console.log(res);
      this.messageService.add({ severity: 'error', summary: 'Product Deleted' });
      this.productservice.getAllProducts().subscribe(res => {
        this.allProducts(res);
      });
    });

  }
}
