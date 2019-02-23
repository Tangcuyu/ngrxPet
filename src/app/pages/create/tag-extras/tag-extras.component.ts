import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-extras',
  templateUrl: './tag-extras.component.html',
  styleUrls: ['./tag-extras.component.scss']
})
export class TagExtrasComponent implements OnInit {
  tagClip: boolean;
  gems: boolean;
  @Output() toggleClipEvent = new EventEmitter();
  @Output() toggleGemsEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  toggleClip() {
    this.toggleClipEvent.emit();
  }

  toggleGems() {
    this.toggleGemsEvent.emit();
  }

}
