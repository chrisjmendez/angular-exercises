import { Injectable } from '@angular/core';

 interface IContact {
   name: string;
   phone: string;
 }

@Injectable()
export class ContactsService {

 constructor() { }

  getContacts(){
    let contacts:IContact[] = [
      {
        name: "Customer 1",
        phone: "12135551111"
      },
      {
        name: "Customer 2",
        phone: "12135552222"
      },
      {
        name: "Customer 3",
        phone: "12135553333"
      }
    ]
    return contacts;
  }
}
