import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {

  // Form Control
  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }

  // Form Group
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required])
  });

  submitProfile() {
    console.log(this.profileForm)
  }

  // Form Builder
  private fb = inject(FormBuilder);
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    })
  })
}
