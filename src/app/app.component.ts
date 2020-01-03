import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "crypto-website";

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ["", Validators.required, Validators.min(3), Validators.max(32)],
      email: ["", Validators.required],
      company: ["", Validators.required, Validators.pattern(/^[\w\s]+$/)],
      subject: ["", Validators.required, Validators.min(0), Validators.max(15)],
      message: [
        "",
        Validators.required,
        Validators.min(30),
        Validators.max(150)
      ]
    });
  }
}
