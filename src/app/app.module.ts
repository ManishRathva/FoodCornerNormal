import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/partials/header/header.component';
import { NotFoundComponent } from './components/pages/partials/not-found/not-found.component';
import { SearchComponent } from './components/pages/partials/search/search.component';
import { TagsComponent } from './components/pages/partials/tags/tags.component';
import { TitleComponent } from './components/pages/partials/title/title.component';
import { PaymentComponent } from './components/payment/payment.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component'
@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    FoodPageComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    TitleComponent,
    TagsComponent,
    SearchComponent,
    PaymentComponent,
    GallaryComponent,
    LoginComponent,
    SignupComponent,
    FeedbackComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
