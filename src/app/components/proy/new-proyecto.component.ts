import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/service/proyecto-service';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombreP: string;
  descripcionP: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Proyecto(this.nombreP, this.descripcionP);
    this.proyectoS.save(educacion).subscribe(
      data =>{
        alert("Proyecto Añadido Correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}

