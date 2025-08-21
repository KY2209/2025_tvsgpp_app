import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtDangkyPage } from './ht-dangky.page';

describe('HtDangkyPage', () => {
  let component: HtDangkyPage;
  let fixture: ComponentFixture<HtDangkyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtDangkyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtDangkyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
