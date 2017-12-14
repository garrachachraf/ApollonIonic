import { Gallery } from './../../app/shared/model/gallery.model';
import { Injectable } from '@angular/core';
import { AppSettings } from './../../app/shared/appSettings';
import { Event } from './../../app/shared/model/event.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from "./../../app/shared/data.service";

@Injectable()
export class EventService extends DataService<Event> {
  constructor(http: HttpClient) {
    super(http, AppSettings.API_ENDPOINT + "events");
  }

  getOne(id: number): Observable<Event> {
    return this.http.get<Event>(this.endpointUrl + "/" + id);
  }
  getEvents(page: number): Observable<Event[]> {
    return this.http.get<Event[]>(
      AppSettings.API_ENDPOINT + "event/findall/" + page
    );
  }
}
