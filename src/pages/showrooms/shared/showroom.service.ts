import { AppSettings } from './../../../app/shared/appSettings';
import { Showroom } from './../../../app/shared/model/showroom.model';
import { Artwork } from './../../../app/shared/model/artwork.model';
import { DataService } from "./../../../app/shared/data.service";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowroomService extends DataService<Showroom>{
    constructor(http: HttpClient){
        super(http, AppSettings.API_ENDPOINT + 'showroom');
      }
    addArtworks(showroom: Showroom){
        return this.http.post(this.endpointUrl + '/artworks', showroom, {responseType: 'text'});
    }

    create(showroom: Showroom){
        return this.http.post(this.endpointUrl, showroom, {responseType: 'text'});
    }
    getByArtistId(artistID: number){
      return this.http.get<Showroom[]>(this.endpointUrl + '/artist/' + artistID);
    }
}
