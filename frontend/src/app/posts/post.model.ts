export class Post {
    private _title: string;
    private _body : string;
    private _date : Date;
    private _sdate: string;
    private _autor : string;

  
    constructor(title: string,body:string,date : Date,sdate: string, autor: string) {
      this._title = title;
      this._body = body;
      this._date = date;
      this._sdate = sdate;
      this._autor = autor;
    }

    toJSON(){
      return{
        title: this._title,
        body: this._body,
        date: this._date,
        sdate: this._sdate,
        autor: this._autor
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

    get autor(){
      return this._autor;
    }

    get date(){
      return this._date; 
    }

    get sdate(){
      return this._sdate;
    }

  }