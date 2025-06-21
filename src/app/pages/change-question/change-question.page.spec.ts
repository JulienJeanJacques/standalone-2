import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
//
import { IonicModule } from '@ionic/angular';
//
import { ChangeQuestionPage } from './change-question.page';

describe('ChangeQuestionPage', () => {
  let component: ChangeQuestionPage;
  let fixture: ComponentFixture<ChangeQuestionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
