import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuathangUpdatePage } from './xuathang-update.page';

describe('XuathangUpdatePage', () => {
  let component: XuathangUpdatePage;
  let fixture: ComponentFixture<XuathangUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuathangUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuathangUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
