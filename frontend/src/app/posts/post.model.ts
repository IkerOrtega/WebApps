export class Post {
  private _id: string;
    private _title: string;
    private _body : string;

  
    constructor(id: string,title: string,body:string) {
      this._title = title;
      this._body = body;
    }

    toJSON(){
      return{
        title: this._title,
        body: this._body
      } 
   
   
    }
    get title(){
      return this._title;
    }

    set title(title:string){
      this._title = title;
    }

    get body() : string {
      return this._body;
    }

    set body(body:string){
      this._body = body;
    }
  }