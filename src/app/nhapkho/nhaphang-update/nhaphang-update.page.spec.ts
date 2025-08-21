import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhaphangUpdatePage } from './nhaphang-update.page';

describe('NhaphangUpdatePage', () => {
  let component: NhaphangUpdatePage;
  let fixture: ComponentFixture<NhaphangUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphangUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhaphangUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
