import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XuathangAddnewPage } from './xuathang-addnew.page';

describe('XuathangAddnewPage', () => {
  let component: XuathangAddnewPage;
  let fixture: ComponentFixture<XuathangAddnewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuathangAddnewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XuathangAddnewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
