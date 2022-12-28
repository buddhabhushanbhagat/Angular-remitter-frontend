import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryRegistrationComponent } from './beneficiary-registration/beneficiary-registration.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RemitterRegistrationComponent } from './remitter-registration/remitter-registration.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [ {path:"",component:LoginComponent},
{path:"home",component:HomeComponent},
{path:"remitter",component:RemitterRegistrationComponent},
{path:"beneficiary",component:BeneficiaryRegistrationComponent},
{path:"fundTransfer",component:FundTransferComponent},
{path:"reports",component:ReportsComponent},
{path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
