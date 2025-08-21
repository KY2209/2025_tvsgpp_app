import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TonkhoIndexPage } from './tonkho-index.page';

describe('TonkhoIndexPage', () => {
  let component: TonkhoIndexPage;
  let fixture: ComponentFixture<TonkhoIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonkhoIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TonkhoIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
