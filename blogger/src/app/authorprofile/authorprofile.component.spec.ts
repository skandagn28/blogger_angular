import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorprofileComponent } from './authorprofile.component';

describe('AuthorprofileComponent', () => {
  let component: AuthorprofileComponent;
  let fixture: ComponentFixture<AuthorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
