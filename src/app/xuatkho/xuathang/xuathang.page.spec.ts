import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuathangPage } from './xuathang.page';

describe('XuathangPage', () => {
  let component: XuathangPage;
  let fixture: ComponentFixture<XuathangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuathangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuathangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
