import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaphethanIndexPage } from './saphethan-index.page';

describe('SaphethanIndexPage', () => {
  let component: SaphethanIndexPage;
  let fixture: ComponentFixture<SaphethanIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaphethanIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaphethanIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
