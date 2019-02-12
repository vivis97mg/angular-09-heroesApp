import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor( private _heroesService:HeroesService) {

    this._heroesService.getHeroes()
    .subscribe( data => {
      // console.log( data );
      // this.heroes = data;
      // this.loading = false;

      setTimeout(() => {
        this.heroes = data;
        this.loading = false;
      }, 2000)

      // UNA FORMA DE TENER LA LLAVE
      // for( let key$ in data ) {
      //   let heroe = data[key$];
      //   heroe.key$ = key$;
      //   this.heroes.push( data[key$] );
      // }
      // console.log( this.heroes );
    });
  }

  ngOnInit() {
  }

  eliminar(key$:string) {
    this._heroesService.eliminar(key$)
    .subscribe(respuesta => {
      if(respuesta) {
        // console.log(respuesta);
      } else {
        //todo bien
        delete this.heroes[key$];
      }
    })
  }

}
