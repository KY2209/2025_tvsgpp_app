import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuathangItemComponent } from './xuathang-item.component';

describe('XuathangItemComponent', () => {
  let component: XuathangItemComponent;
  let fixture: ComponentFixture<XuathangItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuathangItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuathangItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
