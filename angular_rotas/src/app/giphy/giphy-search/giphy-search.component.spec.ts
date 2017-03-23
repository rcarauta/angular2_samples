/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiphySearchComponent } from './giphy-search.component.ts';

describe('GiphySearchComponent', () => {
  let component: GiphySearchComponent;
  let fixture: ComponentFixture<GiphySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
