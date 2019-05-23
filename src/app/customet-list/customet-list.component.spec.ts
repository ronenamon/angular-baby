
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustometListComponent } from './customet-list.component';

describe('CustometListComponent', () => {
  let component: CustometListComponent;
  let fixture: ComponentFixture<CustometListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustometListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustometListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
