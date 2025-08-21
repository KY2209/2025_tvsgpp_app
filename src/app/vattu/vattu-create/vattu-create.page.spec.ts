import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VattuCreatePage } from './vattu-create.page';

describe('VattuCreatePage', () => {
  let component: VattuCreatePage;
  let fixture: ComponentFixture<VattuCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VattuCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VattuCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
