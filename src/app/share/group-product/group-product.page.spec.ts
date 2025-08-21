import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupProductPage } from './group-product.page';

describe('GroupProductPage', () => {
  let component: GroupProductPage;
  let fixture: ComponentFixture<GroupProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
