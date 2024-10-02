import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {
  private filterValue: string= '';

  setFilter(value: string){
    this.filterValue=value;
  }

  getFilter():string{
    return this.filterValue;
  }
 
}
