import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo: string = 'travell';

  public options: Array<any> = [
    { link: '/promo', icon: 'bx bxs-calendar', name: 'Promo Top' },
    { link: '/hotel', icon: 'bx bxs-buildings', name: 'Hotéis' },
    { link: '/voo', icon: 'bx bxs-plane-alt', name: 'Voos' },
    { link: '/pacote', icon: 'bx bxs-package', name: 'Pacotes' },
    { link: '/oferta', icon: 'bx bxs-star', name: 'Top Ofertas' },
    { link: '/carro', icon: 'bx bxs-car', name: 'Aluguel de Carros' },
    { link: '/seguro', icon: 'bx bxs-check-shield', name: 'Seguro Viagem' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
