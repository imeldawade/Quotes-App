import { Component, OnInit } from '@angular/core';

import { Quotes } from '../classes/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  
  quotes: Quotes[] = [
    new Quotes (1, 'Numbing the pain for a while will make it worse when you finally feel it', 'Imelda wade', 'J.K. Rowling', new Date(2021,1,6)),
    new Quotes (2, 'Keep smiling... and one day life will ger tired of upsetting you.', 'Shania', 'NITYA Prakash', new Date(2022,1,10)),
    new Quotes (3, 'Take chances make mistakes. Thats how you grow. PAin nourishes your courage.You have to fail in order to practise being brave.', 'Pendo C.S', 'MARY Tyler', new Date(2021,11,22))
  ]

  // toggleInsights(index: any) {
  //   this.quotes[index].showInsights = !this.quotes[index].showInsights;
  // }

  // quoteDelete(isDeleted: boolean, index: any){
  //   if (isDeleted){
  //     let toDelete = confirm('Do you want the quote deleted?');

  //     if(toDelete){
  //       this.quotes.splice(index, 1);
  //     }
  //   }
  // }

  // addNewQuote(quote: any) {
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength++;
  //   quote.postDate = new Date(quote.postDate);
  //   this.quotes.push(quote);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
