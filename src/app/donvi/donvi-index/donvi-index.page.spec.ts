import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonviIndexPage } from './donvi-index.page';

describe('DonviIndexPage', () => {
  let component: DonviIndexPage;
  let fixture: ComponentFixture<DonviIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonviIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonviIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
