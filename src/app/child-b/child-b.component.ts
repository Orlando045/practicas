import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent{
  @Output() onData = new EventEmitter<any>();
  emitData(){
    this.onData.emit(true);
  }

}
