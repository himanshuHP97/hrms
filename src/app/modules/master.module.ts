import { CommonModule } from '@angular/common';
import { AuthUserModule } from './auth-user/auth-user.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MasterRoutingModule } from './master-routing.module';
import { CoreModule } from '../core/core.module';
import { ModulesComponent } from './modules.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employees/employee.component';
import { LeavesComponent } from './emp-leave/leaves.component';
import { WorklogComponent } from './emp-worklog/worklog.component';
import { ProjectsComponent } from './emp-project/projects.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';

@NgModule({
  declarations: [
    ModulesComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    EmployeeComponent,
    LeavesComponent,
    WorklogComponent,
    ProjectsComponent,
    AddEmployeesComponent,
  ],
  imports: [
    MasterRoutingModule,
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class MasterModule { }
