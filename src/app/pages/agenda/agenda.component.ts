import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
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
