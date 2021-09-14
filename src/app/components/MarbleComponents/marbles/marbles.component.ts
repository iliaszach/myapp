import { Component, OnInit } from '@angular/core';
import {MarbleService} from '../marble.service';
import {Marble} from '../marble';

@Component({
  selector: 'app-marbles',
  templateUrl: './marbles.component.html',
  styleUrls: ['./marbles.component.css']
})
export class MarblesComponent implements OnInit {

  marbles!: Marble[];

  constructor(private marbleService:MarbleService) { }

  ngOnInit(): void {
    this.getMarbles();    
  }

  getMarbles():void{
    this.marbleService.getMarbles()
    .subscribe(
      (data) => this.marbles = data
    );
  }

}
