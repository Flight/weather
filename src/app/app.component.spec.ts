import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  const route = ({ params: of({ cityId: 123 }) } as any) as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatTabsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        NavigationComponent
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: route
        }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
