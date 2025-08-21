import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtMadonviPage } from './ht-madonvi.page';

describe('HtMadonviPage', () => {
  let component: HtMadonviPage;
  let fixture: ComponentFixture<HtMadonviPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtMadonviPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtMadonviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
