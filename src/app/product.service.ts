import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
apiUrl = environment.baseurl;
  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<any>(this.apiUrl+"GetAllProducts");
  }
  addProduct(data: any){
    console.log(data)
    return this.http.post<any>(this.apiUrl+"AddProduct", data);
  }
  deleteProduct(id : number){
    return this.http.delete<any>(this.apiUrl + "DeleteProduct?ProductId=" + id);
  }
  updateProduct(data:any){
    console.log(data)
    return this.http.put<any>(this.apiUrl + "UpdateProduct", data);
  }
}
