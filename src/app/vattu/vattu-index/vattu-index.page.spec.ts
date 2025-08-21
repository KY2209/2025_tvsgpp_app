import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VattuIndexPage } from './vattu-index.page';

describe('VattuIndexPage', () => {
  let component: VattuIndexPage;
  let fixture: ComponentFixture<VattuIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VattuIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VattuIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
