import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhaphangAddnewPage } from './nhaphang-addnew.page';

describe('NhaphangAddnewPage', () => {
  let component: NhaphangAddnewPage;
  let fixture: ComponentFixture<NhaphangAddnewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphangAddnewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhaphangAddnewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
