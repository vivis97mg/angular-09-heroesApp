import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroes.interface'
import 'rxjs/Rx'

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  heroesURL:string ='https://heroesapp-8118c.firebaseio.com/heroes.json';
  heroeURL:string ='https://heroesapp-8118c.firebaseio.com/heroes';

  constructor( private http:Http ) { }

  nuevoHeroe( heroe:Heroe ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers ({
      'Content-Type':'aplicaton/json'
    });

    return this.http.post( this.heroesURL, body, { headers })
    .map( res => {
      console.log(res.json());
      return res.json();
    })
  }

  actualizarHeroe( heroe:Heroe, key$:string ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers ({
      'Content-Type':'aplicaton/json'
    });

    let url = `${this.heroeURL}/${ key$ }.json`

    return this.http.put( url, body, { headers })
    .map( res => {
      console.log(res.json());
      return res.json();
    })
  }

  getHeroe( key$:string ) {
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get ( url )
    .map( res => res.json() );
  }

  getHeroes( ) {
    return this.http.get ( this.heroesURL )
    .map( res => res.json() );
  }

  eliminar( key$:string ) {
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.delete( url )
    .map( res => res.json() );
  }
 
}
