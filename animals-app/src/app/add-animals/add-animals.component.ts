import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss'],
})
export class AddAnimalsComponent implements OnInit {
  animalForm!: FormGroup;

  constructor(
    private _animalsService: AnimalsService,
    private _router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.animalForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      status: [''],
    });
    this.animalForm.controls['status'].setValue('available');
  }

  onSubmit() {
    this._animalsService.addAnimal(this.animalForm.value).subscribe(
      (data) => alert('success'),
      (err) => alert('eroare')
    );
    this.goToAnimalList(this.animalForm.value.status);
    this.animalForm.reset();
  }
  goToAnimalList(status: any) {
    this._router.navigate(['animals-list'], {
      state: { animalStatus: status },
    });
  }
  onCancel() {
    this._router.navigate(['../']);
  }
  get name() {
    return this.animalForm.get('name');
  }

  get id() {
    return this.animalForm.get('id');
  }
}
