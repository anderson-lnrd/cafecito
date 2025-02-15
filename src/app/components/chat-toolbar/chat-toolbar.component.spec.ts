import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToolbarComponent } from './chat-toolbar.component';

describe('ChatToolbarComponent', () => {
  let component: ChatToolbarComponent;
  let fixture: ComponentFixture<ChatToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
