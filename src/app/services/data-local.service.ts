import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'; // CAMBIAR IMPORT
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null; // AGREGAR

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) {
    this.init(); // CAMBIAR: init en lugar de cargarFavoritos
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    await this.cargarFavoritos();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async guardarPelicula( pelicula: PeliculaDetalle ) { // AGREGAR async

    // VERIFICAR QUE EL STORAGE ESTÉ INICIALIZADO
    if (!this._storage) {
      await this.init();
    }

    let existe = false;
    let mensaje = '';

    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Removido de favoritos';
    } else {
      this.peliculas.push( pelicula );
      mensaje = 'Agregada a favoritos';
    }

    this.presentToast( mensaje );
    await this._storage?.set('peliculas', this.peliculas ); // USAR _storage

    return !existe;
  }

  async cargarFavoritos() {

    // VERIFICAR QUE EL STORAGE ESTÉ INICIALIZADO
    if (!this._storage) {
      await this.init();
    }

    const peliculas = await this._storage?.get('peliculas'); // USAR _storage
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id: number ) { // CAMBIAR any por number

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    return (existe) ? true : false;
  }
}
