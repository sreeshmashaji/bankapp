import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChilddeleteComponent } from './childdelete/childdelete.component';
import { CreditComponent } from './credit/credit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = 
[
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'credit', component: CreditComponent},
  {path:'transaction', component:TransactionComponent },
  {path:'delete', component:DeleteComponent },
  {path:'childdelete', component: ChilddeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }