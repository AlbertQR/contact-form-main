import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  @ViewChild('alert') alertPopPup: ElementRef | undefined;
  emailReg: RegExp = /[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}/;
  messageSent: boolean = false;

  contactForm = this.formBuilder.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    lastName: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(this.emailReg)
    ]],
    queryType: ['', Validators.required],
    message: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    consent: ['', Validators.required],
  });

  handleSubmit($event: SubmitEvent): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;
    this.contactForm.reset();
    this.messageSent = true;
    this.alertPopPup?.nativeElement.classList.add('top-6');
    this.alertPopPup?.nativeElement.classList.remove('-top-48');
    setTimeout(() => {
      this.alertPopPup?.nativeElement.classList.remove('top-6');
      this.alertPopPup?.nativeElement.classList.add('-top-48');
    }, 3000);
  }
}
