import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { LoginComponent } from './login/login.component'
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
