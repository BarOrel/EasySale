/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TasksByDeparmentComponent } from './TasksByDeparment.component';

describe('TasksByDeparmentComponent', () => {
  let component: TasksByDeparmentComponent;
  let fixture: ComponentFixture<TasksByDeparmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksByDeparmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksByDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
