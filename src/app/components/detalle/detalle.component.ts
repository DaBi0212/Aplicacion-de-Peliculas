import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: false
})
export class DetalleComponent implements OnInit {

  @Input() id!: number; // CAMBIAR any por number y hacer required

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) { }

  async ngOnInit() { // AGREGAR async
    console.log('ID recibido:', this.id);

    // VERIFICAR SI EXISTE EN FAVORITOS
    const existe = await this.dataLocal.existePelicula(this.id);
    this.estrella = existe ? 'star' : 'star-outline';
    console.log('Existe en favoritos:', existe);

    // CARGAR DETALLES DE LA PELÍCULA
    this.moviesService.getPeliculaDetalle(this.id.toString())
      .subscribe(resp => {
        console.log('Detalles película:', resp);
        this.pelicula = resp;
      });

    // CARGAR ACTORES
    this.moviesService.getActoresPelicula(this.id.toString())
      .subscribe(resp => {
        console.log('Actores:', resp);
        this.actores = resp.cast;
      });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  async favorito() { // AGREGAR async
    console.log('Guardando favorito:', this.pelicula);

    // VERIFICAR QUE LA PELÍCULA TENGA DATOS
    if (!this.pelicula.id) {
      console.error('No hay película para guardar');
      return;
    }

    const existe = await this.dataLocal.guardarPelicula(this.pelicula);
    this.estrella = existe ? 'star' : 'star-outline';

    console.log('Favorito guardado. Existe:', existe);
  }
}
