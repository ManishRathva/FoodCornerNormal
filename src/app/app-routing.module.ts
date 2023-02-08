import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { LoginComponent } from './components/login/login.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: 'app-home', component: HomeComponent},
  { path: 'search/:searchTerm',component: HomeComponent },
  { path: 'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'payment',component: PaymentComponent},
  {path:'gallary',component: GallaryComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'contact',component:ContactUsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
