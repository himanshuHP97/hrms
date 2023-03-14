import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './auth-user/auth-user.guard';

import { ProjectsComponent } from './emp-project/projects.component';
import { LeavesComponent } from './emp-leave/leaves.component';
import { WorklogComponent } from './emp-worklog/worklog.component';
import { EmployeeComponent } from './employees/employee.component';
import { ModulesComponent } from './modules.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    canActivate: [AuthUserGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'workallocation', component: DashboardComponent },
      {
        path: 'employee',
        component: EmployeeComponent,
        children: [
          {
            path: 'add-employee',
            component: AddEmployeesComponent,
          },
        ],
      },
      { path: 'emp-worklog', component: WorklogComponent },
      { path: 'emp-leave', component: LeavesComponent },
      { path: 'emp-project', component: ProjectsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
