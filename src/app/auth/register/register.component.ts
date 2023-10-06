import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  startDate = new Date(1990, 0, 1);
  userRegisterOn=false;

  constructor ( private formBuilder: FormBuilder){}

  registerForm = this.formBuilder.group({
    name: ['Efra', Validators.required],
    lastname1: ['juarez', Validators.required],
    lastname2: ['mendoza', Validators.required],
    date: ['', Validators.required],

  });


  secondFormGroup=this.formBuilder.group({
    email:['efrain@gmial.com', [Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    phoneNumber: ['',[Validators.required]],
  })

  isEditable = false;


  letterValidation(event: Event, controlName: string) {
    const inputValue = (event.target as HTMLInputElement).value;
    const onlyLetters = inputValue.replace(/[^a-zA-Z]+/g, '');
    this.registerForm.get(controlName)?.setValue(onlyLetters, { emitEvent: false });
  }
  numberValidation(event: Event, controlName: string) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const onlyNumbers = inputValue.replace(/[^0-9]+/g, ''); // Mantener solo dígitos numéricos
    inputElement.value = onlyNumbers;
    this.registerForm.get(controlName)?.setValue(onlyNumbers, { emitEvent: false });
  }
  

  get email(){
    return this.secondFormGroup.controls.email;
  }

  get password(){
    return this.secondFormGroup.controls.password;
  }
  
  isFormFilled(): boolean {
    return (this.registerForm.valid && this.secondFormGroup.valid) // Devuelve true si el formulario es válido
  }
  
}