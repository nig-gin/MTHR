// import {Pipe, PipeTransform} from '@angular/core';
// import {UserSt} from '../../../../shared/object/user-st';
// import {jourInterface} from '../../../../shared/object/interfeces';
//
//
// @Pipe({
//   name: 'searchReglam'
// })
// export class searchPipe implements PipeTransform {
//   transform(reglaments: jourInterface[], search = ''): jourInterface[] {
//     if (!search.trim()) {
//       return   reglaments;
//     }
//
//     return reglaments.filter(reglament => {
//       return reglament.user_id.toLowerCase().includes(search.toLowerCase())
//     })
//   }
//
// }
