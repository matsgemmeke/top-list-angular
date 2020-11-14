import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListsComponent} from './components/lists/lists.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
