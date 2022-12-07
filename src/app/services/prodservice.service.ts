import { produto } from './../models/prod.model';



import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';



import { Guid } from 'guid-typescript';



@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  constructor(private storage:Storage) { }

  insert(argumento:produto){

    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString() ,JSON.stringify(argumento))


  }




//  async listartodos(){

//   let arrayprod = produto [] = [];
//   await this.storage.forEach((value:string)=>{const produto = JSON.parse(value);arrayprod.push(produto)

//   return arrayprod
//   }


//   )



//  }



}
