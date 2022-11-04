import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnimalsService } from './animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'animals-app';

  ngOnInit(): void {
    
  }

  
}
