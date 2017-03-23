/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GiphySearchAutoComponent } from './giphy-search-auto.component.ts';

describe('GiphySearchAutoComponent', () => {
  let component: GiphySearchAutoComponent;
  let fixture: ComponentFixture<GiphySearchAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphySearchAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphySearchAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
