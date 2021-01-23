import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatCardComponent } from './cat-card.component';

describe('CatCardComponent', () => {
  let component: CatCardComponent;
  let fixture: ComponentFixture<CatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
