import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {

     let x='';

        if (value) {
          for (let index = 0; index < value.length; index++) {

            let a:any = [index];
            let b:any = a%2;
            console.log(a);
            //console.log(b)

            let y;
            if (b==0) {
              y= value[index].toUpperCase()
            }else {
              y= value[index]
            }
            x+=y
        
            //x += value[index];
            //  if (index%2==0) {
            //    x += value[index].toUpperCase();
            //  }else{
            //    x+value[x].toUpperCase();
            //  }
            // return x;
            //  var b = value.slice(1, value.length);
            //  let a = value[0].toUpperCase();
            //  return a + b;
          }
          return x
        }else return value;
    
    }
  }


