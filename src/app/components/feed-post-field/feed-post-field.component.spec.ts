import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostFieldComponent } from './feed-post-field.component';

describe('FeedPostFieldComponent', () => {
  let component: FeedPostFieldComponent;
  let fixture: ComponentFixture<FeedPostFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedPostFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedPostFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
