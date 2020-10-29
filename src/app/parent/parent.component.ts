import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
   public pri="";
 public it="";
 public ind="";
  public items = [{item : "Soap", price : "100" }];
  constructor() { }

  ngOnInit(): void {
  }

    addList(m){
        this.items=[...this.items,m]
    }

    edit(k){
      this.pri = k.price;
      this.it = k.item;
      this.ind = k.i

      console.log(k.i)
    }

    edited(ed){
      let myIt ={item:ed.item, price:ed.price};
      this.items=this.items.map((myItem,i)=> i == ed.i?myIt:myItem);
      console.log(myIt, ed.i);

      this.pri=""; this.it=""; this.ind="";

    }
}
