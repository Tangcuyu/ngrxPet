import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PetTag } from '../core/pet-tag.model';


@Component({
  selector: 'app-tag-preview',
  templateUrl: './tag-preview.component.html',
  styleUrls: ['./tag-preview.component.scss']
})
export class TagPreviewComponent implements OnInit, OnChanges {
  @Input() petTag: PetTag;
  imgSrc = '';
  tagClipText: string;
  gemsText: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.imgSrc = `/assets/images/${this.petTag.shape}.svg`;
    this.tagClipText = this.boolToText(this.petTag.clip);
    this.gemsText = this.boolToText(this.petTag.gems);
  }

  //  boolean to string
  private boolToText(bool: boolean) {
    return bool ? 'Yes' : 'No';
  }

}
