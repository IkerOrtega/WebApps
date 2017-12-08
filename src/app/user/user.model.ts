import {Post} from './../posts/post.model'

export class User {
    private _username : String;
    private _id: String;
    private _userList: String;

   

    constructor(username: string){
    }

    get id(){
        return this._id;
      }

      get userList(){
          return this._userList;
      }


}