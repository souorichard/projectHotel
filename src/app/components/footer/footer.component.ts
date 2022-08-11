import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public links: Array<any> = [

    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Famex.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Faura.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fcredz.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fdiners.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fdiscover.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Felo.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fhiper.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fhipercard.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fjcb.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fmastercard.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fsorocred-1.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fsorocred.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fitau.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fbradesco.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fsantander.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fbb.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fbanrisul.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fcaixa.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2FsafetyPay.png&w=70&q=100' },
    { src: 'https://123milhas.com/_next/image?url=%2Fcard-flags%2Fpix.png&w=70&q=100' },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
