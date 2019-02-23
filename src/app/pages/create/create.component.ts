import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { PetTag } from '../../core/pet-tag.model';
import * as petTagAction from '../../core/pet-tag.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;


  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe(
      (state) => {
        this.petTag = state;
        this.done = !!(this.petTag.shape && this.petTag.text);
      }
    );
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  selectShapeHandler(shape: string) {
    this.store.dispatch({
      type: petTagAction.ActionTypes.SelectShape,
      payload: shape
    });
  }

  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: petTagAction.ActionTypes.SelectFont,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    this.store.dispatch({
      type: petTagAction.ActionTypes.AddText,
      payload: text
    });
  }

  toggleClipHandler() {
    this.store.dispatch({
      type: petTagAction.ActionTypes.ToggleClip
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: petTagAction.ActionTypes.ToggleGems
    });
  }

  submit() {
    this.store.dispatch({
      type: petTagAction.ActionTypes.Complete,
      payload: true
    });
  }

}
