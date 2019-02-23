import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from './/app-routing.module';
import { RantListComponent } from './rant-list/rant-list.component';
import { RantDetailsComponent } from './rant-details/rant-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoaderComponent, RantListComponent, RantDetailsComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
