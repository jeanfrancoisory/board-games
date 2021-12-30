import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DameGameComponent } from './dame-game.component';

describe('DameGameComponent', () => {
  let component: DameGameComponent;
  let fixture: ComponentFixture<DameGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DameGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DameGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
