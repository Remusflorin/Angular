import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private _http: HttpClient) {}

  getAnimals(status: string) {
    return this._http.get(
      `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`
    );
  }

  deleteAnimal(id: number) {
    return this._http.delete(`https://petstore.swagger.io/v2/pet/${id}`, {});
  }

  getAnimalById(id: number) {
    return this._http.get(`https://petstore.swagger.io/v2/pet/${id}`);
  }

  addAnimal(animal: any) {
    return this._http.post(`https://petstore.swagger.io/v2/pet`, {
      id: animal.id,
      name: animal.name,
      status: animal.status,
    });
  }

  updateAnimal(animal: any) {
    return this._http.put(`https://petstore.swagger.io/v2/pet`, {
      id: animal.id,
      name: animal.name,
      status: animal.status,
    });
  }
}
