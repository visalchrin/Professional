import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
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
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ShareService } from './services/share.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello', component: NavigatorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [BsModalService, SearchService, ShareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
