import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillListPage } from './bill-list.page';

describe('BillListPage', () => {
  let component: BillListPage;
  let fixture: ComponentFixture<BillListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
