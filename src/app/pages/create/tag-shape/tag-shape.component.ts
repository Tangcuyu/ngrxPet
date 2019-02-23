import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tag-shape',
  templateUrl: './tag-shape.component.html',
  styleUrls: ['./tag-shape.component.scss']
})
export class TagShapeComponent implements OnInit {
  tagShape: string;
  @Output() selectShapeEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectShape(shape: string) {
    this.selectShapeEvent.emit(shape);
  }

}
