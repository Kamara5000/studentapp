import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(student: any[], search: any): unknown {
    //return null;

    if (!search) {
      return student;
    } else{
      // let studentFiltered = student.filter((stud=>stud.firstName.toLowerCase().includes(search)) || 
      // (stud=>stud.matNO.toNumber().includes(search)));
      let studentFiltered = student.filter(stud=>stud.firstName.toLowerCase().includes(search));
      return studentFiltered;
    }
  }

}


// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'itemFilter'
// })
// export class ItemFilterPipe implements PipeTransform {

//   transform(items: any[], searchText: any): unknown {
   
//     if (!searchText) {
//       return items
//     }else{
//     searchText = searchText.toLowerCase();
//         let filteredItems = items.filter(it=>it.item.toLowerCase().includes(searchText))
//         return filteredItems;
//     }
//   }

// }
