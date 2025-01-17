import { CommonModule, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CustomButtonComponent } from "../../../customComponent/custom-button/custom-button.component";

@Component({
  selector: "app-forms",
  standalone: true,
  imports: [CustomButtonComponent, JsonPipe, CommonModule, FormsModule],
  templateUrl: "./forms.component.html",
  styleUrl: "./forms.component.scss",
})
export class FormsComponent {
  activeTab: "template" | "reactive" = "template";

  templateFormObj: any = {
    username: "",
    email: "",
    phone: null,
    state: "",
    gender: "male",
    terms: false,
  };

  formValue: any;

  submitForm(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach((controlName) => {
        form.controls[controlName].markAsTouched();
      });
    } else {
      console.log("Form Submitted:", this.templateFormObj);
    }
  }
}
