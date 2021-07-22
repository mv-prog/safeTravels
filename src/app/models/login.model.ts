export class Login {

    public email: string;
    public passwd: string;

    constructor( object: any){
      this.email = (object.email) ? object.email : null;
      this.passwd = (object.passwd) ? object.passwd : null;
    }
  }
