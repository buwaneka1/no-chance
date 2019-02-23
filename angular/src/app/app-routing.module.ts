import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RantListComponent } from "./rant-list/rant-list.component";
import { RantDetailsComponent } from "./rant-details/rant-details.component";

const appRoutes: Routes = [
  {
    path: "",
    component: RantListComponent
  },
  {
    path: "rant/:id",
    component: RantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
