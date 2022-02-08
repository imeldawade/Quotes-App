// import { Component, OnInit } from '@angular/core';

// import { Quotes } from '../classes/quotes';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })

// export class QuoteComponent implements OnInit {
  
//   quotes: Quotes[] = [
//     new Quotes (1, 'Numbing the pain for a while will make it worse when you finally feel it', 'Imelda wade', 'J.K. Rowling', new Date(2021,1,6)),
//     new Quotes (2, 'Keep smiling... and one day life will ger tired of upsetting you.', 'Shania', 'NITYA Prakash', new Date(2022,1,10)),
//     new Quotes (3, 'Take chances make mistakes. Thats how you grow. PAin nourishes your courage.You have to fail in order to practise being brave.', 'Pendo C.S', 'MARY Tyler', new Date(2021,11,22))
//   ]

//   //  the toggle function takes index of type any as an argument and the logic for displaying the insights defined to change the showInsights from false to true and vise versa
//   toggleInsights(index: any) {
//     this.quotes[index].showInsights = !this.quotes[index].showInsights;
//   }

//   //  "Define the logic for the function declared in the html file having within it the event to be emitted with the index and the user will be warned to confirm if for sure they want the quote deleted
//   quoteDelete(isDeleted: boolean, index: any){
//     if (isDeleted){
//       let toDelete = confirm('Do you want the quote deleted?');

//       if(toDelete){
//         this.quotes.splice(index, 1);
//       }
//     }
//   }

//   addNewQuote(quote: any) {
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength++;
//     quote.postDate = new Date(quote.postDate);
//     this.quotes.push(quote);
//   }


//   constructor() { }

//   ngOnInit(): void {
//   }

// }
