import { Component, Input  } from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input() cardvalue:any;
  text: string;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'card component';
  }

  ionViewDidLoad(){
    console.log("card ready "+this.cardvalue)
  }
}
