import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ServersComponent } from './servers/servers.component'
import { ServerComponent } from './servers/server/server.component'
import { EditServerComponent } from './servers/edit-server/edit-server.component'
import { UsersComponent } from './users/users.component'
import { UserComponent } from './users/user/user.component'



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'servers',
    component: ServersComponent,
  children: [
  {
    path: ':id',
    component: ServerComponent
  },
  {
    path: ':id/edit',
    component: EditServerComponent
  }
  ]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
  {
    path: ':id/:name',
    component: UserComponent
  }
  ]
  },
  {
  path: '**',
  redirectTo: '/not-found',
  pathMatch: 'full'
  }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
