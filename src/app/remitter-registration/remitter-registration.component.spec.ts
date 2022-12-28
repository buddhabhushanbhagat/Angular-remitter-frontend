import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitterRegistrationComponent } from './remitter-registration.component';

describe('RemitterRegistrationComponent', () => {
  let component: RemitterRegistrationComponent;
  let fixture: ComponentFixture<RemitterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitterRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
