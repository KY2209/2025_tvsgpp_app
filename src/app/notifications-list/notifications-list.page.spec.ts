import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationsListPage } from './notifications-list.page';

describe('NotificationsListPage', () => {
  let component: NotificationsListPage;
  let fixture: ComponentFixture<NotificationsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
