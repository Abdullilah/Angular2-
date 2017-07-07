import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";

@Injectable()
export class ContactSevice{
  getContact(){
    return Promise.resolve(CONTACTS);
  }
}
