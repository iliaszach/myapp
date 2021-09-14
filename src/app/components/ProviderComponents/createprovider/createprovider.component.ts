import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LocationsComponent } from '../../LocationComponents/locations/locations.component';
import { BusinessType, Location, Marble, Provider } from '../provider';
import { ProviderService } from '../provider.service';
import {Subscription} from 'rxjs';
import { MarbleService } from '../../MarbleComponents/marble.service';
import { BusinesstypesService } from '../../BusinessTypeComponents/businesstypes.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-createprovider',
  templateUrl: './createprovider.component.html',
  styleUrls: ['./createprovider.component.css']  
})


export class CreateproviderComponent implements OnInit, OnChanges {
  
  cardForm = new FormGroup({
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

  constructor(private router: Router,private providerService:ProviderService,private btypesService: BusinesstypesService, private marbleService:MarbleService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');;
  }
  

  ngOnInit(): void {
    this.getMarbles();
    this.getBTypes();
  }

  goToRead(){
    this.router.navigate(["/Providers"]);
  }

  onSubmit() {
    let provider = <Provider>{};
    provider.CompanyTitle = this.cardForm.controls.CompannyTitle.value;
    provider.CompanyDescription = this.cardForm.controls.CompanyDescription.value;
    provider.CompanyPhoto = this.cardForm.controls.CompanyPhoto.value;
    provider.Phone = this.cardForm.controls.CompanyPhone.value;
    provider.WebSite = this.cardForm.controls.WebSite.value;
    provider.Email = this.cardForm.controls.CompanyEmail.value;

    provider.Location = <Location>{};
    
    provider.Location.Country = this.cardForm.controls.Country.value;
    provider.Location.City = this.cardForm.controls.City.value;
    provider.Location.Address = this.cardForm.controls.Address.value;
    provider.Location.Lat = this.cardForm.controls.Lat.value;
    provider.Location.Lng = this.cardForm.controls.Lng.value;


    provider.Marbles = new Array;
    for (const marble of this.cardForm.controls.Marbles.value) {
      provider.Marbles.push(<Marble>{ MarbleId: marble })
    }

    provider.BusinessTypes = new Array;
    for (const btype of this.cardForm.controls.BTypes.value) {
      provider.BusinessTypes.push(<BusinessType>{ BusinessTypeId: btype })
    }

    console.log(provider);

    this.providerService.CreateProvider(provider).subscribe(
      () => {
        this.onResetClick();
        this.getProviders();  
        this.goToRead()      
      },(error) => console.log(error)
    );

  }
  providers!: Provider[];
  getProviders():void {
    this.providerService.getProviders()
    .subscribe(
      (data) => this.providers = data
    );
  }

  onResetClick() {
    this.cardForm.reset();
  }
  
  marbles!: Marble[];
  getMarbles(): void {
    this.marbleService.getMarbles()
      .subscribe(
        (data) => this.marbles = data
      );
  }
  bTypes!: BusinessType[];
  getBTypes(): void {
    this.btypesService.getBTypes()
      .subscribe(
        (data) => this.bTypes = data
      );
  }

  uploadFinished(event:any){
    this.cardForm.controls.CompanyPhoto.setValue("/Content/images/ProviderPhotos/"+event);   
  }
  



}
