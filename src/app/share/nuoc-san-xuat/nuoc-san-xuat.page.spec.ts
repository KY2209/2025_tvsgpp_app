import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuocSanXuatPage } from './nuoc-san-xuat.page';

describe('NuocSanXuatPage', () => {
  let component: NuocSanXuatPage;
  let fixture: ComponentFixture<NuocSanXuatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuocSanXuatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuocSanXuatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
