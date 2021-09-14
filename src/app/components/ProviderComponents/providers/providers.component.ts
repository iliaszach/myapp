import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  
  providers!: Provider[];
  companyTitle: any;
  companyPhone: any;
  selectedProvider!: Provider;
  message!: string;
  p:number = 1;
  constructor(private providerService: ProviderService, private router:Router) { }

  
  ngOnInit(): void {
    this.getProviders();
  }  

  SearchByTitle() {
    if (this.companyTitle == "") {
      this.ngOnInit();
    }
    else {
      this.providers = this.providers.filter(
        data => {
          console.log(this.companyTitle);
          return data.CompanyTitle.toLowerCase()
            .match(this.companyTitle.toLowerCase())
        }

      )
    }
  }
 
  key: any = 'CompanyTitle';
  reverse:boolean = false;
  sort(key: any) {
    this.key =key;
    this.reverse = !this.reverse
  }

  goToCreate(){
    this.router.navigate(["/Create"]);
  }



  getProviders(): void {
    this.providerService.getProviders()
      .subscribe(
        (data) => this.providers = data
      );
  }

  SelectProvider(provider:Provider) {
    this.router.navigate(["/Update", provider.ProviderId]);
  }

  deleteProvider(id: number) {
    if (confirm("Are you sure you want to delete this provider?"))
      this.providerService
        .deleteProvider(id)
        .subscribe(
          data => {
            this.getProviders();
          }, (error) => console.log(error));        
  }

  UpdateProvider() {

  }

}
