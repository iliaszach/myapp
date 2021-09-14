import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproviderComponent } from './createprovider.component';

describe('CreateproviderComponent', () => {
  let component: CreateproviderComponent;
  let fixture: ComponentFixture<CreateproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
