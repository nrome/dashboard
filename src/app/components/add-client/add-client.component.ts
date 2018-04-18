// angular
import { Component, OnInit, ViewChild } from '@angular/core';
// services
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
// models
import { Client } from '../../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  // define properties and types
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnAdd: boolean = true;
  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean }) {
    console.log(value, valid);
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      // display an error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // add new client
      this.clientService.newClient(value);
      // show message
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // redirect to dash or /
      this.router.navigate(['/']);
    }
  }

}
