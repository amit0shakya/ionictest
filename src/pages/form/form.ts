import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { WebserviceProvider } from '../../providers/webservice/webservice';
import { Posts } from '../../models/posts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  private form : FormGroup;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private service:WebserviceProvider
  ) {
    //constructor code
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      disc: ['', Validators.required],
      image: ['',Validators.required],
      ammount: ['', Validators.required],
    }) 
  }

  addImage(){    
    this.service.addData(this.form.value)
    .subscribe(
      function(data){
        console.log('table id-->',data)
      }
      ,function(err){
        console.log(err)
      }
    )
    //this.http.post()
    console.log('form value>',this.form.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }
}
