import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-edit-animals',
  templateUrl: './edit-animals.component.html',
  styleUrls: ['./edit-animals.component.scss'],
})
export class EditAnimalsComponent implements OnInit {
  animalForm!: FormGroup;
  animal: any;
  constructor(
    private _animalsService: AnimalsService,
    private _router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.animalForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });

    this.animal = history.state.animal;

    this.animalForm.get('id')?.setValue(this.animal.id);
    this.animalForm.get('name')?.setValue(this.animal.name);
    this.animalForm.get('status')?.setValue(this.animal.status);
  }
  onSubmit() {
    this.animal = {
      id: this.animalForm.value.id,
      name: this.animalForm.value.name,
      status: this.animalForm.value.status,
    };

    this._animalsService.updateAnimal(this.animal).subscribe(
      (data) => alert('success'),
      (err) => alert('eroare')
    );
    this.goToAnimalList(this.animalForm.value.status);
    this.animalForm.reset();
  }

  onCancel() {
    this._router.navigate(['../']);
  }

  goToAnimalList(status: any) {
    this._router.navigate(['animals-list'], {
      state: { animalStatus: status },
    });
  }

  get name() {
    return this.animalForm.get('name');
  }
}
