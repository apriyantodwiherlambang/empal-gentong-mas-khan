import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMenuComponent } from './popular-menu.component';

describe('PopularMenuComponent', () => {
  let component: PopularMenuComponent;
  let fixture: ComponentFixture<PopularMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
