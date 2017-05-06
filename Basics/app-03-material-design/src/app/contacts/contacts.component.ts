import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../contacts.service";
import { MdDialog, MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any[];

  constructor(
    private contactsService: ContactsService,
    public mdDialog:MdDialog
  ){ }

  ngOnInit() {
    //Assign service data to array
    this.contacts = this.contactsService.getContacts();
  }

  add(){
    //Once the dialog closes, you get your contact patch
    let dialog = this.mdDialog.open(AddContactDialog)
    //And now you're just adding the contact to the array
    //TODO: Add this to Firebase
    dialog.afterClosed().subscribe(contact => {
      if(contact){
        this.contacts.push(contact);
      }
    })
  }

  delete(contact){
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}

/*
Add Contact Dialog Component

*/

@Component({
  selector: 'add-contact-dialog',
  template: `
    <h1 md-dialog-title>Add contact</h1>

    <md-input-container>
      <input mdInput #contactName placeholder="Contact name">
    </md-input-container>

    <md-input-container>
      <input mdInput #contactPhone placeholder="Contact phone">
    </md-input-container>

    <button md-raised-button color="primary" (click)="dialog.close({
      name: contactName.value,
      phone: contactPhone.value })">
      Save
    </button>

    <button md-raised-button (click)="dialog.close()">
      Close dialog
    </button>
    `
})

/*
We have to add some logic because we are calling a dialog reference.
*/
export class AddContactDialog {
  constructor(
    public dialog: MdDialogRef<AddContactDialog>
  ){}
}
