import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
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

  exibirFooter: boolean = false; // Controle do footer

  toggleFooter() {
    this.exibirFooter = !this.exibirFooter;
  }
  
  isDarkMode = false; 
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
