import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExploracionPage } from './exploracion.page';

describe('ExploracionPage', () => {
  let component: ExploracionPage;
  let fixture: ComponentFixture<ExploracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
