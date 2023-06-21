import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { SinglebookviewComponent } from './singlebookview/singlebookview.component';

const routes: Routes = [
  { 
    path: '', 
    component: BooklistComponent,
  },
  { 
    path: 'singlebook', 
    component: SinglebookviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
