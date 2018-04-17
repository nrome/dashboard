import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  // define properties
  clients: Client[];

  // inject dependency services in the constructor
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe
    (clients => this.clients = clients);
  }

}
