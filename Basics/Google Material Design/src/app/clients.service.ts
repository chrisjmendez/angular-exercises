import { Injectable } from '@angular/core';

 interface IClient {
   name: string;
 }

@Injectable()
export class ClientsService {

  constructor() { }

  getClients(){
    let clients:IClient[] = [
      {
        name: "TAYLOR CO JAPANESE AUTO SERVICE"
      },
      {
        name: "Client 2"
      }
    ]
  }
}
