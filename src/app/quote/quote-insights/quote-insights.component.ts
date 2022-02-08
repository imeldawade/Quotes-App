import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Quotes } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-insights',
  templateUrl: './quote-insights.component.html',
  styleUrls: ['./quote-insights.component.css']
})

export class QuoteInsightsComponent implements OnInit {

  @Input() quotin!: Quotes;

  @Output() isDeleted = new EventEmitter<boolean>();
  deleteQuote(deleted: boolean){
    this.isDeleted.emit(deleted);
  }
 
  likeQuote(){
    this.quotin.likes++
  }
  dislikeQuote(){
    this.quotin.dislikes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
