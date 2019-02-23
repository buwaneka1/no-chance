import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from './/app-routing.module';
import { RantListComponent } from './rant-list/rant-list.component';
import { RantDetailsComponent } from './rant-details/rant-details.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';
import { RantComponent } from './rant/rant.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoaderComponent, RantListComponent, RantDetailsComponent, LoginComponent, RantComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ApiService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
