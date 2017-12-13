import { Subject } from 'rxjs/Subject';
import { AppSettings } from './../../app/shared/appSettings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../app/shared/data.service';
import { Wishlist } from '../../app/shared/model/wishlist.model';
import { Artwork } from '../../app/shared/model/artwork.model';

/*
  Generated class for the WishlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WishlistProvider extends DataService<Wishlist> {

  constructor(http:HttpClient){
    super(http,AppSettings.API_ENDPOINT+"wishlist/");
  }
  artworks: Artwork[];
      // Observable string sources
  private artworksSource = new Subject<Artwork>();

  // Observable string streams
  artworkAdded$ = this.artworksSource.asObservable();

  // Service message commands
  addArtworkToStream(artwork: Artwork) {
      this.artworksSource.next(artwork);
  }

  getWishlist(){
      return this.http.get<Wishlist>(this.endpointUrl);
  }

  addItem(itemId: number){
      return this.http.post(this.endpointUrl+itemId,null,{responseType:'text'})
  }

  removeItem(itemId: number){
      return this.http.delete(this.endpointUrl+itemId,{responseType:'text'})
  }

  getTotal(){
      return this.http.get<number>(this.endpointUrl+'total')
  }
}
