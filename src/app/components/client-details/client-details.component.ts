// angular
import { Component, OnInit } from '@angular/core';
// services
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
// models
import { Client } from '../../models/client';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

 // define property types
 id: string;
 client: Client;
 hasBalance: boolean = false;
 showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // get id from url 
    this.id = this.route.snapshot.params['id'];
    // get client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client != null) {
        if (client.balance > 0 ) {
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }

  onDeleteClick() {
    // create delete confirmation
    if (confirm('Are you sure?')) {
      // call service.method
      this.clientService.deleteClient(this.client);
      // offer response/feedback
      this.flashMessage.show('Client removed', {
        cssClass: 'alert-success', timeout: 4000
      });
      // redirect
      this.router.navigate(['/']);
    }
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

}
