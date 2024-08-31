import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmarioPage } from './armario.page';

describe('ArmarioPage', () => {
  let component: ArmarioPage;
  let fixture: ComponentFixture<ArmarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
