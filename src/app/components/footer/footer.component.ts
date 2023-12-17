import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  items = [
    { 
      icon: 'home',
      text: 'Início',
      link: '/produtos'
    },
    { 
      icon: 'search',
      text: 'Buscar',
      link: '/busca'
    },
    { 
      icon: 'receipt',
      text: 'Pedidos',
      link: '/pedidos'
    },
    { 
      icon: 'person',
      text: 'Perfil',
      link: '/entrar'
    },
  ]
}
