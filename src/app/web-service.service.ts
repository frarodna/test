import { Injectable } from '@angular/core';
import { Users }     from './user-mock';


@Injectable()
export class WebServiceService {

  constructor() { }

   getUsuarios() {
    console.log('Getting users ...');
    return Users;
  }

}
