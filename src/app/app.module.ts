import { AuthGuardService } from './services/auth-guard.service';
import { FormBoNewsCareerComponent } from './components/Form-Bo-Newscareer/Form-BO-Newscareer.component';
import { BoNewsCareerComponent } from './components/BO-NewsCareer/BO-newscareer.component';
import { NewsCareerComponent } from './components/News-Career/news-career.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FeedComponent } from './components/feed/feed.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { CustomMarkdownPipe } from './custom-markdown.pipe';
import { TrendingComponent } from './components/trending/trending.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { InvolveComponent } from './components/involve/involve.component';
import { PeopleComponent } from './components/people/people.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'navigator', component: NavigatorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'feed', canActivate: [AuthGuardService], component: FeedComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'News-Career', canActivate: [AuthGuardService], component: NewsCareerComponent},
  { path: 'BO-NewsCareer', canActivate: [AuthGuardService], component: BoNewsCareerComponent},
  { path: 'Form-BO-Newscareer', canActivate: [AuthGuardService],component: FormBoNewsCareerComponent},
  { path: 'profile/edit', canActivate: [AuthGuardService], component: EditInfoComponent},
  { path: 'profile/:username',canActivate: [AuthGuardService], component: ProfileComponent},
  { path: 'search/:query', canActivate: [AuthGuardService], component: SearchComponent},
  { path: 'newsDetail/:id', canActivate: [AuthGuardService], component: NewsDetailComponent},
  { path: 'trending', canActivate: [AuthGuardService], component: TrendingComponent},
  { path: 'createNewJob', canActivate: [AuthGuardService], component: CreateJobComponent},
  { path: 'involve/:jobId', canActivate: [AuthGuardService], component: InvolveComponent},
  { path: 'talents', canActivate: [AuthGuardService], component: PeopleComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    AboutUsComponent,
    NewsCareerComponent,
    BoNewsCareerComponent,
    FormBoNewsCareerComponent,
    ProfileComponent,
    PostComponent,
    SearchComponent,
    NewsDetailComponent,
    CustomMarkdownPipe,
    TrendingComponent,
    EditInfoComponent,
    CreateJobComponent,
    InvolveComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
