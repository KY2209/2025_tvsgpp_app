import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DvtCreatePage } from './dvt-create.page';

describe('DvtCreatePage', () => {
  let component: DvtCreatePage;
  let fixture: ComponentFixture<DvtCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvtCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DvtCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
