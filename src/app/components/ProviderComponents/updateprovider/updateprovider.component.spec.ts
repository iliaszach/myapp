import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproviderComponent } from './updateprovider.component';

describe('UpdateproviderComponent', () => {
  let component: UpdateproviderComponent;
  let fixture: ComponentFixture<UpdateproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
