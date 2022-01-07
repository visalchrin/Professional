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


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hello', component: NavigatorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'News-Career', component: NewsCareerComponent},
  { path: 'BO-NewsCareer', component: BoNewsCareerComponent},
  { path: 'Form-BO-Newscareer', component: FormBoNewsCareerComponent},
  { path: 'profile', component: ProfileComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
