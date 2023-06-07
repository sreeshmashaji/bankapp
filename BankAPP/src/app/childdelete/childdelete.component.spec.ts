import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddeleteComponent } from './childdelete.component';

describe('ChilddeleteComponent', () => {
  let component: ChilddeleteComponent;
  let fixture: ComponentFixture<ChilddeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilddeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilddeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
