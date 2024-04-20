import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMenuComponent } from './browse-menu.component';

describe('BrowseMenuComponent', () => {
  let component: BrowseMenuComponent;
  let fixture: ComponentFixture<BrowseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
