import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contatos.component.html',
  styleUrls: [
    './../../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css',
    './contatos.component.css'
  ]
})
export class ContatosComponent {

  onSubmit(form: NgForm): void {
    console.log('Email enviado:', form.value.email);
  }
}
