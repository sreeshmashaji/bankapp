import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childdelete',
  templateUrl: './childdelete.component.html',
  styleUrls: ['./childdelete.component.css']
})
export class ChilddeleteComponent implements OnInit {
  
  @Input() item:any|undefined
  @Output() onCancel= new EventEmitter()
  @Output() onDelete= new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  cancel()
  {
    this.onCancel.emit()
  }

    delete()
{
  this.onDelete.emit(this.item)
}
}
