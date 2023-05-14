import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto-service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proy',
  templateUrl: './proy.component.html',
  styleUrls: ['./proy.component.css']
})
export class ProyComponent implements OnInit {
  proy: Proyecto[] = [];

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.proyectoS.lista().subscribe(data => { this.proy = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}


