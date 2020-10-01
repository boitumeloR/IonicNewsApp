import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsNewsPage } from './us-news.page';

describe('UsNewsPage', () => {
  let component: UsNewsPage;
  let fixture: ComponentFixture<UsNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
