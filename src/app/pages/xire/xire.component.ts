import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../../componentes/footer/footer.component";
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xire',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './xire.component.html',
  styleUrls: ['./xire.component.css']
})
export class XireComponent implements OnInit {
  private http = inject(HttpClient); 

  @ViewChild('navContainer') navContainer!: ElementRef;
  isDarkMode = false; 
  exibirFooter: boolean = false; // Controle do footer

  toggleFooter() {
    this.exibirFooter = !this.exibirFooter;
  }
  // Variáveis de Estado
  todosCanticos: any[] = [];
  canticosFiltrados: any[] = [];
  termoBusca: string = '';
  orixaSelecionado: string = '';
  momentoSelecionado: string = '';
  nacaoSelecionada: string = '';
  exibirFiltros: boolean = false;

  // Lista de Orixás conforme sua solicitação
  orixasNav = [
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' },
    { nome: 'Exu', icone: 'bi-bezier', filtro: 'Exu', cor: '#dc3545' },
    { nome: 'Omolu', icone: 'bi-patch-exclamation', filtro: 'Omolu', cor: '#795548' },
    { nome: 'Ogum', icone: 'bi-shield-shaded', filtro: 'Ogum', cor: '#0d6efd' },
    { nome: 'Oxumaré', icone: 'bi-infinity', filtro: 'Oxumaré', cor: '#adff2f' },
    { nome: 'Xangô', icone: 'bi-lightning-charge-fill', filtro: 'Xangô', cor: '#fd7e14' },
    { nome: 'Iansã', icone: 'bi-wind', filtro: 'Iansã', cor: '#b02a37' },
    { nome: 'Obá', icone: 'bi-shield-lock', filtro: 'Obá', cor: '#8b0000' },
    { nome: 'Oxóssi', icone: 'bi-compass', filtro: 'Oxóssi', cor: '#198754' },
    { nome: 'Ossain', icone: 'bi-tree', filtro: 'Ossain', cor: '#20c997' },
    { nome: 'Oxalá', icone: 'bi-brightness-high-fill', filtro: 'Oxalá', cor: '#adb5bd' },
    { nome: 'Ewá', icone: 'bi-eye-fill', filtro: 'Ewá', cor: '#ff69b4' },
    { nome: 'Oxum', icone: 'bi-search', filtro: 'Oxum', cor: '#ffc107' },
    { nome: 'Iemanjá', icone: 'bi-water', filtro: 'Iemanjá', cor: '#0dcaf0' },
    { nome: 'Nanã', icone: 'bi-flower1', filtro: 'Nanã', cor: '#9400d3' },
    { nome: 'Todos', icone: 'bi-grid-fill', filtro: '', cor: '#6c757d' }, 
  ];

  nacoes = ['Ketu', 'Angola', 'Jeje', 'Nagô', 'Efã'];

  ngOnInit(): void {
    this.http.get<any[]>('data/xire.json').subscribe({
      next: (dados) => {
        this.todosCanticos = dados;
        this.canticosFiltrados = dados;
      },
      error: (err) => console.error('Erro ao carregar cânticos:', err)
    });
  }

  toggleFiltros() {
    this.exibirFiltros = !this.exibirFiltros;
  }

  getCorAtual(): string {
    const o = this.orixasNav.find(x => x.filtro === this.orixaSelecionado);
    return (o && o.nome !== 'Oxalá') ? o.cor : '#6c757d';
  }

  aplicarFiltro(nomeOrixa?: string) {
    if (nomeOrixa !== undefined) {
      this.orixaSelecionado = nomeOrixa;
    }

    const busca = this.termoBusca.toLowerCase();

    this.canticosFiltrados = this.todosCanticos.filter(c => {
      const matchOrixa = this.orixaSelecionado ? c.orixa === this.orixaSelecionado : true;
      const matchMomento = this.momentoSelecionado ? c.momento === this.momentoSelecionado : true;
      const matchNacao = this.nacaoSelecionada ? c.nacao === this.nacaoSelecionada : true;
      
      const matchBusca = !this.termoBusca || 
        c.titulo.toLowerCase().includes(busca) || 
        c.orixa.toLowerCase().includes(busca) ||
        c.linhas.some((l: any) => l.y.toLowerCase().includes(busca) || l.p.toLowerCase().includes(busca));

      return matchOrixa && matchMomento && matchNacao && matchBusca;
    });
  }

  scrollNav(px: number) {
    const container = this.navContainer.nativeElement;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Se clicar para avançar e estiver no fim (Oxalá), volta para o início (Todos/Exu)
    if (px > 0 && container.scrollLeft >= maxScroll - 12) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } 
    // Se clicar para voltar e estiver no início (Exu), vai para o fim (Oxalá)
    else if (px < 0 && container.scrollLeft <= 12) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } 
    else {
      container.scrollBy({ left: px, behavior: 'smooth' });
    }
  }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}