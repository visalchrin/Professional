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

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hello', component: NavigatorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'News-Career', component: NewsCareerComponent},
  { path: 'BO-NewsCareer', component: BoNewsCareerComponent},
  { path: 'Form-BO-Newscareer', component: FormBoNewsCareerComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewsCareerComponent,
    BoNewsCareerComponent,
    FormBoNewsCareerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
