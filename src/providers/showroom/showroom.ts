import { AppSettings } from './../../app/shared/appSettings';
import { Showroom } from './../../app/shared/model/showroom.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../app/shared/data.service';

/*
  Generated class for the ShowroomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShowroomProvider extends DataService<Showroom>{
  constructor(http:HttpClient){
      super(http,AppSettings.API_ENDPOINT+"showroom");
    }
  addArtworks(showroom:Showroom){
      return this.http.post(this.endpointUrl+'/artworks',showroom,{responseType:'text'})
  }

  create(showroom:Showroom){
      return this.http.post(this.endpointUrl,showroom,{responseType:'text'})
  }
}
