import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinesstypesService } from '../../BusinessTypeComponents/businesstypes.service';
import { MarbleService } from '../../MarbleComponents/marble.service';
import { BusinessType, Location, Marble, Provider } from '../provider';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-updateprovider',
  templateUrl: './updateprovider.component.html',
  styleUrls: ['./updateprovider.component.css']
})
export class UpdateproviderComponent implements OnInit {
  providers!: Provider[];
  marbles!: Marble[];
  bTypes!: BusinessType[];
  providerId: number;
  locationId: any;

  providerForm = new FormGroup({
    //Provider
    CompannyTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    CompanyDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(45)
    ]),
    CompanyPhoto: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(25)
    ]),
    CompanyPhone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(25)
    ]),
    WebSite: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    CompanyEmail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    //Location
    Country: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    City: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    Address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]),
    Lat: new FormControl(0, [
      Validators.required
    ]),
    Lng: new FormControl(0, [
      Validators.required
    ]),
    //Marble
    Marbles: new FormControl('', [
      Validators.required
    ]),
    BTypes: new FormControl('', [
      Validators.required
    ]),
  })

  constructor(private btypesService: BusinesstypesService, private marbleService: MarbleService, private router: Router, private providerService: ProviderService, private actRoute: ActivatedRoute) {
    this.providerId = this.actRoute.snapshot.params['id'];
     
    this.readProvider();
  }

  ngOnInit(): void {
    this.getBTypes();
    this.getMarbles();
    this.getProviders();
  }
  readProvider() {
    this.providerService.getProviderById(this.providerId).subscribe(
      (data) => {
        console.log(data);
        let locId = data.Location.LocationId;
        this.locationId = locId;        
        this.providerForm.controls.CompannyTitle.setValue(data.CompanyTitle);
        this.providerForm.controls.CompanyDescription.setValue(data.CompanyDescription);
        this.providerForm.controls.CompanyPhoto.setValue(data.CompanyPhoto);
        this.providerForm.controls.CompanyPhone.setValue(data.Phone);
        this.providerForm.controls.WebSite.setValue(data.WebSite);
        this.providerForm.controls.CompanyEmail.setValue(data.Email);
        this.providerForm.controls.Country.setValue(data.Location.Country);
        this.providerForm.controls.City.setValue(data.Location.City);
        this.providerForm.controls.Address.setValue(data.Location.Address);
        this.providerForm.controls.Lat.setValue(data.Location.Lat);
        this.providerForm.controls.Lng.setValue(data.Location.Lng);
        this.providerForm.controls.Marbles.setValue(data.SelectedMarbles);
        this.providerForm.controls.BTypes.setValue(data.SelectedBTypes);
      }

    )
  }

  


  UpdateProvider() {
    let provider = <Provider>{};
    provider.ProviderId = this.providerId;
    provider.CompanyTitle = this.providerForm.controls.CompannyTitle.value;
    provider.CompanyDescription = this.providerForm.controls.CompanyDescription.value;
    provider.CompanyPhoto = this.providerForm.controls.CompanyPhoto.value;
    provider.Phone = this.providerForm.controls.CompanyPhone.value;
    provider.WebSite = this.providerForm.controls.WebSite.value;
    provider.Email = this.providerForm.controls.CompanyEmail.value;

    provider.Location = <Location>{};
    provider.Location.LocationId = this.locationId;
    console.log(provider.Location.LocationId);

    provider.Location.Country = this.providerForm.controls.Country.value;
    provider.Location.Address = this.providerForm.controls.Address.value;
    provider.Location.City = this.providerForm.controls.City.value;
    provider.Location.Lat = this.providerForm.controls.Lat.value;
    provider.Location.Lng = this.providerForm.controls.Lng.value;
   
     // HelperMarbles: number[]

    provider.HelperMarbles = new Array;
    for (const marble of this.providerForm.controls.Marbles.value) {
      provider.HelperMarbles.push(marble);      
    }

    provider.HelperBusinessTypes = new Array;
    for (const btype of this.providerForm.controls.BTypes.value) {
      provider.HelperBusinessTypes.push(btype);      
    }

    console.log(provider);

    this.providerService.UpdateProvider(provider).subscribe(
      () => {
        this.onResetClick();
        this.getProviders();
        this.goToRead()
      }, (error) => console.log(error)
    );
  }
  
  getProviders(): void {
    this.providerService.getProviders()
      .subscribe(
        (data) => this.providers = data
      );
  }
  
  getMarbles(): void {
    this.marbleService.getMarbles()
      .subscribe(
        (data) => this.marbles = data
      );
  }
  
  getBTypes(): void {
    this.btypesService.getBTypes()
      .subscribe(
        (data) => this.bTypes = data
      );
  }

  goToRead() {
    this.router.navigate(["/Providers"]);
  }

  onResetClick() {
    this.providerForm.reset();
  }

}
