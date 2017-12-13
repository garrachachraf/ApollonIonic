import { AppSettings } from './../../app/shared/appSettings';
import { Showroom } from './../../app/shared/model/showroom.model';
import { DataService } from './../../app/shared/data.service';
import { Artwork } from './../../app/shared/model/artwork.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArtworkService extends DataService<Artwork> {
  constructor(http: HttpClient) {
    super(http, AppSettings.API_ENDPOINT + "ArtWork");
  }
  getOne(id: number): Observable<Artwork> {
    return this.http.get<Artwork>(this.endpointUrl + "/find/" + id);
  }
  getArtworks(page: number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(
      AppSettings.API_ENDPOINT + "ArtWork/findall/" + page
    );
  }
  getArtworksByArtist(artistId: number) {
    return this.http.get<Artwork[]>(
      AppSettings.API_ENDPOINT + "ArtWork/artist/" + artistId
    );
  }
}
