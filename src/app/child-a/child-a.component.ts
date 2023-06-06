import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customChild-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent {
  selected = false;
  _item: any = {};
  @Input ('reitem') data:any;
  @Output('OnChange') change: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.change.emit(this.data.id);
  }

  @Output() itemChange = new EventEmitter<number>();
  @Output() emitData = new EventEmitter<number>();

  @Input()
  get item() {
    return this._item;
  }
  set item(value: any) {
    this._item = value;
    this.selected = value.id === this.data.id; // Comprueba si el elemento actual es el seleccionado
  }

  onChangeItem() {
    this.itemChange.emit(this.data);
  }
  receivedChildB(value: any){
    this.emitData.emit(value);
  }
}
