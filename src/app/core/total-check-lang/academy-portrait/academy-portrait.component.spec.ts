import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyPortraitComponent } from './academy-portrait.component';

describe('AcademyPortraitComponent', () => {
  let component: AcademyPortraitComponent;
  let fixture: ComponentFixture<AcademyPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
