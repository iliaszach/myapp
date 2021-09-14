import { Component, OnInit } from '@angular/core';
import { BusinessType } from '../businesstype';
import { BusinesstypesService } from '../businesstypes.service';

@Component({
  selector: 'app-businesstypes',
  templateUrl: './businesstypes.component.html',
  styleUrls: ['./businesstypes.component.css']
})
export class BusinesstypesComponent implements OnInit {

  businessTypes!: BusinessType[];
  constructor(private btypesServices: BusinesstypesService) { }

  ngOnInit(): void {
    this.getBusinessTypes()
  }

  getBusinessTypes():void {
    this.btypesServices.getBTypes()
      .subscribe(
        (data) => this.businessTypes = data
      );
  }

}
