import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ProvidersComponent } from './components/ProviderComponents/providers/providers.component';
import { MarblesComponent } from './components//MarbleComponents/marbles/marbles.component';
import { LocationsComponent } from './components/LocationComponents/locations/locations.component';
import { BusinesstypesComponent } from './components/BusinessTypeComponents/businesstypes/businesstypes.component';
import { CreateproviderComponent } from './components/ProviderComponents/createprovider/createprovider.component';
import { NgbdModalComponent } from './components/ModalComponent/ngbd-modal/ngbd-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardFormComponent } from './forms/card-form/card-form.component';
import { InputComponent } from './forms/input/input.component';
import { UpdateproviderComponent } from './components/ProviderComponents/updateprovider/updateprovider.component';
import { UploadphotoComponent } from './components/Shared/uploadphoto/uploadphoto.component';
import { StatisticsComponent } from './components/StatisticsComponents/statistics/statistics.component';




@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    MarblesComponent,
    LocationsComponent,
    BusinesstypesComponent,
    CreateproviderComponent,
    NgbdModalComponent,
    CardFormComponent,
    InputComponent,
    UpdateproviderComponent,
    UploadphotoComponent,
    StatisticsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
