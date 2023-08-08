import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { BoxComponent } from './services/box/box.component';
import { HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './one-post/one-post.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { WhyComponent } from './why/why.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BoxComponent,
    OnePostComponent,
    ClientsComponent,
    TeamComponent,
    ContactComponent,
    PortfolioComponent,
    IntroComponent,
    AboutComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
