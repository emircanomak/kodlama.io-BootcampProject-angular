import { filter } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { ICreateBootcampModel } from '../models/request/bootcamp/createBootcampModel';

@Pipe({
  name: 'bootcampList'
})
export class BootcampListPipe implements PipeTransform {

  transform(value: ICreateBootcampModel[], filterBootcamp:string): ICreateBootcampModel[] {
    
    filterBootcamp=filterBootcamp?filterBootcamp.toLocaleLowerCase():null
    return filterBootcamp?value.filter((b:ICreateBootcampModel)=>b.name.toLocaleLowerCase().indexOf(filterBootcamp)!==-1):value;
  }

}
