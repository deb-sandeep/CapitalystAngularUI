import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibAssetsComponent } from './lib-assets.component';

describe('LibAssetsComponent', () => {
  let component: LibAssetsComponent;
  let fixture: ComponentFixture<LibAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibAssetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
