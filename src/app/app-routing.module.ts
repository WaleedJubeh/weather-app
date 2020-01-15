import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { animation: 'slideInAnimation' },

  },
  {
    path: "details/:id",
    component: DetailsComponent,
    data: { animation: 'slideInAnimation' },

  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
