import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhaphangDetailPage } from './nhaphang-detail.page';

describe('NhaphangDetailPage', () => {
  let component: NhaphangDetailPage;
  let fixture: ComponentFixture<NhaphangDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphangDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhaphangDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
