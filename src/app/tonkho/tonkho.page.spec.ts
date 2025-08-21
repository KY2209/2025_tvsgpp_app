import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TonkhoPage } from './tonkho.page';

describe('TonkhoPage', () => {
  let component: TonkhoPage;
  let fixture: ComponentFixture<TonkhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonkhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TonkhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
