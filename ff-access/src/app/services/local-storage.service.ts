import { Inject, Injectable } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  STORAGE_KEY = "user_storage"

  constructor (@Inject(LOCAL_STORAGE)private storage:StorageService) { }

  public storageOnLocalStorage(username:String, password:string, token:string, isLogged:boolean):void{
    const current_storage = this.storage.get(this.STORAGE_KEY) || []

    current_storage.push({
      user:username,
      pass:password,
      token:token,
      Date:Date.now().toString,
      isLoggedIn:isLogged
    });

    this.storage.set(this.STORAGE_KEY, current_storage)
    console.log(this.storage.get(this.STORAGE_KEY) || 'Local storage is empty')
  }
}
