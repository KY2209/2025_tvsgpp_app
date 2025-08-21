import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonviCreatePage } from './donvi-create.page';

describe('DonviCreatePage', () => {
  let component: DonviCreatePage;
  let fixture: ComponentFixture<DonviCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonviCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonviCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
