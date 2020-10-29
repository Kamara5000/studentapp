import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myIt = "";
  @Input() myPri = ""; 
  @Input() myInd = "";  
  @Output() addItemEvent = new EventEmitter<{}>();

  @Output() editItemEvent = new EventEmitter<{}>();

  
  public item="";
  public price="";
  public itemList = [];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    let list = {item: this.item, price:this.price};
    this.itemList=[...this.itemList,list];
    this.addItemEvent.emit(list);

    console.log(this.itemList)

    this.item= ''; this.price='';
  }

  editItem(){
    this.editItemEvent.emit({item:this.item, price:this.price, i:this.myInd});
    

  }
}
