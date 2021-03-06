import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReleaseDownloadsComponent } from './release-downloads.component';
import { MdSnackBar } from '@angular/material';
import { HttpModule, JsonpModule } from '@angular/http';
import { GitHubService } from 'app/services/git-hub.service';
import { StatsService } from 'app/services/stats.service';

import { Observable } from 'rxjs/Rx';

describe('ReleaseDownloadsComponent', () => {
  let component: ReleaseDownloadsComponent;
  let fixture: ComponentFixture<ReleaseDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseDownloadsComponent],
      providers: [StatsService, GitHubService, MdSnackBar],
      imports: [MaterialModule, BrowserAnimationsModule, HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseDownloadsComponent);
    component = fixture.componentInstance;
    component.user = 'x0156';
    component.repo = 'gh-stats';
    fixture.detectChanges();
  });

});
