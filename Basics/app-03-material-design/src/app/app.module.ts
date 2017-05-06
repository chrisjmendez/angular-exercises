import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App specific modules
import { MdButtonModule, MdCardModule, MdInputModule, MdSidenavModule, MdToolbarModule, MdListModule, MdIconModule, MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { FavoritesComponent } from './favorites/favorites.component';

// Services
import { ContactsService } from "app/contacts.service";
import { ClientsService } from "app/clients.service";

// Routing
const routes:Routes = [
{
  path: '',
  component: FavoritesComponent
},  
{
  path: 'contacts',
  component: ContactsComponent
},
{
  path: 'favorites',
  component: FavoritesComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FavoritesComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdDialogModule,

    RouterModule.forRoot(routes)
  ],
  providers: [
    ContactsService,
    ClientsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddContactDialog
  ]
})
export class AppModule { }
