import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhaphangPage } from './nhaphang.page';

describe('NhaphangPage', () => {
  let component: NhaphangPage;
  let fixture: ComponentFixture<NhaphangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhaphangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
