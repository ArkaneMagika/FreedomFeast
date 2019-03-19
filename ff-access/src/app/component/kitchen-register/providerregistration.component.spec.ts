import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderregistrationComponent } from './providerregistration.component';

describe('ProviderregistrationComponent', () => {
  let component: ProviderregistrationComponent;
  let fixture: ComponentFixture<ProviderregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
