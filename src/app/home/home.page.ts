import { Component } from '@angular/core';
import { from, of, Observable, merge, forkJoin } from 'rxjs';
import { Storage } from '@ionic/storage';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  PRELOAD_IMAGE_PATH = 'assets/shapes.svg'

  images = [
    'https://firebasestorage.googleapis.com/v0/b/birdi-test-275a0.appspot.com/o/images%2F4vKs1HkPvpWf3TPBWd8JfRyJXIs1%2Fconv%40360x240_1560889832986.jpg?alt=media&token=2f5dee31-46d5-46aa-bab3-b4bdcb4858b6',
    'https://firebasestorage.googleapis.com/v0/b/birdi-test-275a0.appspot.com/o/images%2F4vKs1HkPvpWf3TPBWd8JfRyJXIs1%2Fconv%40360x240_1560889841535.jpg?alt=media&token=bae228d3-071f-4f49-ae55-4d5aeaf4e5f5',
    'https://firebasestorage.googleapis.com/v0/b/birdi-test-275a0.appspot.com/o/images%2F4vKs1HkPvpWf3TPBWd8JfRyJXIs1%2Fconv%40360x240_1560889857202.jpg?alt=media&token=157fcc5b-8731-4a55-afe2-74230c74c283'
  
  ]
  

  constructor(
    private _storage: Storage
  ) {}

  test (url: string){
    const t = this;
/*
    return from(this._storage.get(url))
    .pipe(
      map(item=>{
        if (item){
          delete item.group;
          return of(item);
        }
      })
    );
    */
   /*
    var _this = this;
        var cacheItems = [];
        return from(this._storage.forEach(function (item) {
            if (item.group) {
                item.status = CacheConstants.ITEM_STATUS.DELETED;
                cacheItems.push(item);
            }
            ;
        }))
        .pipe(
            map(() => {
                return forkJoin(cacheItems.map(function (item) { return from(_this._storage.remove(item.url)); }));
            }),
            map(() => {
                return of(cacheItems); //}
            })
        )
        */
  }



}
