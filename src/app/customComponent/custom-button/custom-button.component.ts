import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-custom-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./custom-button.component.html",
  styleUrl: "./custom-button.component.scss",
})
export class CustomButtonComponent {
  @Input() type = "text";
  @Input() text: string = "";
  @Input() disabled = false;
  @Input() loading = false;
  @Input() colour = "default";
  @Input() withIcon: boolean = false;
  @Input() color: string = "";
  @Input() background: string = "";
  @Input() border: string = "";
}
