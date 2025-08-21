import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KhoIndexPage } from './kho-index.page';

describe('KhoIndexPage', () => {
  let component: KhoIndexPage;
  let fixture: ComponentFixture<KhoIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KhoIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
