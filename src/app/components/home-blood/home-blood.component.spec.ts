import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBloodComponent } from './home-blood.component';

describe('HomeBloodComponent', () => {
  let component: HomeBloodComponent;
  let fixture: ComponentFixture<HomeBloodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBloodComponent]
    });
    fixture = TestBed.createComponent(HomeBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
