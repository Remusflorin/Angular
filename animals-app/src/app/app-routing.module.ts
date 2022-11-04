import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalsComponent } from './add-animals/add-animals.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { EditAnimalsComponent } from './edit-animals/edit-animals.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';

const routes: Routes = [
  { path: 'animals-list', component: AnimalsListComponent },
  { path: 'edit', component: EditAnimalsComponent },
  { path: 'view', component: ViewAnimalsComponent },
  { path: 'add-animals', component: AddAnimalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
