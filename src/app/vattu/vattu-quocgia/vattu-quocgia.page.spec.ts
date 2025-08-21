import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VattuQuocgiaPage } from './vattu-quocgia.page';

describe('VattuQuocgiaPage', () => {
  let component: VattuQuocgiaPage;
  let fixture: ComponentFixture<VattuQuocgiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VattuQuocgiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VattuQuocgiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
