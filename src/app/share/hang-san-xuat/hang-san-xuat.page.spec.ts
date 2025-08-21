import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HangSanXuatPage } from './hang-san-xuat.page';

describe('HangSanXuatPage', () => {
  let component: HangSanXuatPage;
  let fixture: ComponentFixture<HangSanXuatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangSanXuatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HangSanXuatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
