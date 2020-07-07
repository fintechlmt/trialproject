import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule} from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule} from  '@angular/material/list';
import { MatButtonModule} from  '@angular/material/button';
import { HomecarousalComponent } from './homecarousal/homecarousal.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
//import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomecarousalComponent,
    PricingComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
