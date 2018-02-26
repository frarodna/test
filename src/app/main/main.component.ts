import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../web-service.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [WebServiceService]
})
export class MainComponent {
  users: UserModel[];

  constructor(serviciosWeb: WebServiceService) { 
  	this.users = serviciosWeb.getUsuarios();
  }

  ngOnInit() {

  	console.log(this.users);

  }

}
