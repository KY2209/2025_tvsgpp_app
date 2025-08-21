import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VattuListPage } from './vattu-list.page';

describe('VattuListPage', () => {
  let component: VattuListPage;
  let fixture: ComponentFixture<VattuListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VattuListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VattuListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
