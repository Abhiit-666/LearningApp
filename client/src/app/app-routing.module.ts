import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  {path: '',component : LandingPageComponent },
  {path: 'topic/:id', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
