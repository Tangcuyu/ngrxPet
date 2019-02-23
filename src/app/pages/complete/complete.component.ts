import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { PetTag, initialTag } from '../../core/pet-tag.model';
import * as petTagAction from '../../core/pet-tag.actions';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubcription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubcription = this.tagState$.subscribe(
      (state) => {
        this.petTag = state;
      }
    );
  }

  ngOnDestroy() {
    this.tagStateSubcription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: petTagAction.ActionTypes.Reset,
      payload: initialTag
    });
  }

}
