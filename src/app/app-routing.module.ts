import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';

const routes: Routes = [
  {
    path:'',component:PropertyListComponent,
  },
  {path: 'rent-property', component: PropertyListComponent},
  {
    path:'add',component:AddPropertyComponent
  },
  {
    path:'property-detail/:id',component:PropertyDetailComponent
  },
  {
    path:'user/login',component:UserLoginComponent
  },
  {
    path:'user/register',component:UserRegisterComponent
  },
  {
    path:'**',component:AddPropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
