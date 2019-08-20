import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestblogsComponent } from './latestblogs.component';

describe('LatestblogsComponent', () => {
  let component: LatestblogsComponent;
  let fixture: ComponentFixture<LatestblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
