import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SysHomePage } from './sys-home.page';

describe('SysHomePage', () => {
  let component: SysHomePage;
  let fixture: ComponentFixture<SysHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SysHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
