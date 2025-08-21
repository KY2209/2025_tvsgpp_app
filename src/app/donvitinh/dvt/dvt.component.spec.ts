import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DVTComponent } from './dvt.component';

describe('DVTComponent', () => {
  let component: DVTComponent;
  let fixture: ComponentFixture<DVTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVTComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DVTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
