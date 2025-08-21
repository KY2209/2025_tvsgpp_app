import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LienthongPage } from './lienthong.page';

describe('LienthongPage', () => {
  let component: LienthongPage;
  let fixture: ComponentFixture<LienthongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienthongPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LienthongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
