import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  constructor(
    private _animalsService: AnimalsService,
    private _router: Router
  ) {}

  animals: any;
  globalStatus: string = '';
  globalId: number = 0;

  ngOnInit(): void {
    this.globalStatus = history.state.animalStatus;
    if (this.globalStatus && this.globalStatus !== '') {
      this.getAnimals(this.globalStatus);
    }
  }

  getAnimals(status: string) {
    this.globalStatus = status;
    this.animals = this._animalsService.getAnimals(status);
  }
  deleteAnimal(id: number) {
    this._animalsService.deleteAnimal(id).subscribe();
    this.animals = this._animalsService.getAnimals(this.globalStatus);
  }
  goToEdit(route: string, animal: any) {
    this._router.navigate([`${route}`], { state: { animal: animal } });
  }

  goToView(route: string, id: number) {
    this._router.navigate([`${route}`], { state: { animalId: id } });
  }
}
