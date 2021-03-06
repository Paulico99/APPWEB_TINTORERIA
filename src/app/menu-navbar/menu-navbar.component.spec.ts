import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavbarComponent } from './menu-navbar.component';

describe('MenuNavbarComponent', () => {
  let component: MenuNavbarComponent;
  let fixture: ComponentFixture<MenuNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
