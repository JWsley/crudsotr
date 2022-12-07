
import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';

import {Guid} from 'guid-typescript'

import { produto } from 'src/app/models/prod.model';

import { ProdserviceService} from 'src/app/services/prodservice.service'

@Component({
  selector: 'app-formprod',
  templateUrl: './formprod.page.html',
  styleUrls: ['./formprod.page.scss'],
})
export class FormprodPage implements OnInit {
  public ionForm:FormGroup

  private produto:produto

  public arrayprod:any



  constructor(private FormBuilder:FormBuilder,private Prodserv : ProdserviceService) { }

  ngOnInit() {

    this.Prodserv.listartodos().then(arrayprod =>(this.arrayprod = arrayprod))
    this.produto = {id: Guid.createEmpty(),nome:"",fabric:"",valor:"",quan:""}


    this.ionForm = this.FormBuilder.group({

      'id':[this.produto.id],
      'nome':  [this.produto.nome, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(34)])],
      'fabric':[this.produto.fabric, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(34)])],
      'valor': [this.produto.valor, Validators.required],
      'quan':  [this.produto.quan, Validators.required]



    })




  }

  enviar(){

    if(this.ionForm.valid){
      this.Prodserv.insert(this.ionForm.value)


    }





  }
}
