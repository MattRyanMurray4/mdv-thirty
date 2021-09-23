import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent, WildComponent } from '@make-app/ui-library';
import { CollegesComponent } from './colleges/colleges.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'colleges', component: CollegesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
