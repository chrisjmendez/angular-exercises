import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  contacts: any[];

  constructor(private contactsService: ContactsService) { 
  }

  ngOnInit() {
    //Assign service data to array
    this.contacts = this.contactsService.getContacts().slice(0,3);
  }
}
