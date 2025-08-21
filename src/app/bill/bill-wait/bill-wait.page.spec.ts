import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillWaitPage } from './bill-wait.page';

describe('BillWaitPage', () => {
  let component: BillWaitPage;
  let fixture: ComponentFixture<BillWaitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillWaitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillWaitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
