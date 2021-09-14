import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './components/ProviderComponents/providers/providers.component';
import { CreateproviderComponent } from './components/ProviderComponents/createprovider/createprovider.component';
import { UpdateproviderComponent } from './components/ProviderComponents/updateprovider/updateprovider.component';
import { MarblesComponent } from './components/MarbleComponents/marbles/marbles.component';
import { StatisticsComponent } from './components/StatisticsComponents/statistics/statistics.component';


const routes: Routes = [
{path: "Providers", component:ProvidersComponent},
{path: "Create", component:CreateproviderComponent},
{path: "Update/"+":id", component:UpdateproviderComponent},
{path: "Marbles", component:MarblesComponent},
{path: "Statistics", component:StatisticsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
