import { AppSettings } from './../../app/shared/appSettings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../app/shared/data.service';
import {Gallery} from "../../app/shared/model/gallery.model";
/*

/*
  Generated class for the ShowroomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryProvider extends DataService<Gallery>{
  constructor(http: HttpClient) {
    super(http, 'http://127.0.0.1:18080/Apollo-web/app/galleries/v2');
  }
  updateGallery(g:Gallery) {
    return this.http.post(this.endpointUrl,g,{responseType:'text'})
  }
  deleteGallery(g: number) {
    return this.http.delete(this.endpointUrl + '/' + g,{responseType:'text'});
  }
}
