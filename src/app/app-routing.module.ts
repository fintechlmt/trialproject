import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { LoginComponent } from './login/login.component'
import { ContactComponent } from './contact/contact.component'
import { LoggedinhomeComponent } from './loggedinhome/loggedinhome.component'
import { RegisterComponent } from './register/register.component'
import { NewhomeComponent } from './newhome/newhome.component'


const routes: Routes = [
  { path: '', component: NewhomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: NewhomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'loggedinhome', component: LoggedinhomeComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
