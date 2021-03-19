import {Pipe, PipeTransform} from '@angular/core';
import {cont} from '../../shared/object/interfeces';


@Pipe({
  name: 'searchPosts'
})
export class searchPipe implements PipeTransform{

  transform(conts: cont[], search = ''): cont[] {
    if (!search.trim()) {
      return conts;
    }

    return conts.filter(cont => {
      return cont.category.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
