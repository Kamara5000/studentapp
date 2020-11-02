import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }

  //public dataSource = new BehaviorSubject("Ayo");

  
  // public dataSource : BehaviorSubject<Array<{}>> = new BehaviorSubject([{matNO:"123", studentName:"ib"}]);

  public dataSource : BehaviorSubject<{}> = new BehaviorSubject({});
  public updateSource(nam){
    this.dataSource.next(nam);
  }
}
