import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildmenuComponent } from './buildmenu.component';

describe('BuildmenuComponent', () => {
  let component: BuildmenuComponent;
  let fixture: ComponentFixture<BuildmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildmenuComponent]
    });
    fixture = TestBed.createComponent(BuildmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
