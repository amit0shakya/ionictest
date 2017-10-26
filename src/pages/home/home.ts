import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardComponent } from '../../components/card/card';
import { FormPage } from '../form/form';
import { WebserviceProvider } from '../../providers/webservice/webservice';
import { Http } from '@angular/http';
import { Posts } from '../../models/posts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CardComponent]
})

export class HomePage {
  carddata:Posts[]=[];
  constructor(public navCtrl: NavController, public http:Http, public services:WebserviceProvider) {
    
  }

  ionViewDidLoad(){
    this.getdata();
  }

  getdata(){
    this.services.getData()
    .subscribe(
      function(cb){
        this.carddata=cb;
      },function(err){
        console.log(err);
      }
    )
  }

  showform(){
    this.navCtrl.push(FormPage);
  }
    valIncrement(){
  }
  
}
