import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

  transform(price : number): string {
    return "₹ " +  price; 
  }

}
