import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../componentes/footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
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
