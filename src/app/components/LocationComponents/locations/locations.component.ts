import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { ProviderService } from '../../ProviderComponents/provider.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  txtLocationCountry!: string;
  txtLocationCity!: string;
  txtLocationAddress!: string;
  txtLocationLat!: number;
  txtLocationLng!: number;



  @Output() location = new EventEmitter<Location>();
  constructor(private services:ProviderService) { }

  ngOnInit(): void {

  }
  Createlocation(data: any) {    
    console.log(data);
    this.location.emit(data);
    console.log(this.location);
    
  }

}
