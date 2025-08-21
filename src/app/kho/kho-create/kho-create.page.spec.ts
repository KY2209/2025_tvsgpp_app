import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhoCreatePage } from './kho-create.page';

describe('KhoCreatePage', () => {
  let component: KhoCreatePage;
  let fixture: ComponentFixture<KhoCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhoCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
