import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimationFeuxArtificesComponent } from './animation-feux-artifices.component';

describe('AnimationFeuxArtificesComponent', () => {
  let component: AnimationFeuxArtificesComponent;
  let fixture: ComponentFixture<AnimationFeuxArtificesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFeuxArtificesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationFeuxArtificesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
