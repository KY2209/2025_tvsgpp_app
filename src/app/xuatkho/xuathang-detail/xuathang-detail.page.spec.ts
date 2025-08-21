import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuathangDetailPage } from './XuathangDetailPage';

describe('XuathangDetailPage', () => {
  let component: XuathangDetailPage;
  let fixture: ComponentFixture<XuathangDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuathangDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuathangDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
