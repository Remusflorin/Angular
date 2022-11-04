import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.scss'],
})
export class ViewAnimalsComponent implements OnInit {
  constructor(private _animalsService: AnimalsService) {}
  animalId: any;
  selectedAnimal: any;
  ngOnInit(): void {
    this.animalId = history.state.animalId;
    this.getAnimal();
  }

  getAnimal() {
    if (this.animalId) {
      this._animalsService
        .getAnimalById(this.animalId)
        .subscribe((animal) => (this.selectedAnimal = animal));
    }
  }
}
