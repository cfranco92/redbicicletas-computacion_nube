import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Bicycle } from "src/app/core/models/bicycle.model";
import { BicycleService } from "src/app/core/services/bicycle/bicycle.service";

@Component({
  selector: "app-bicycle-new",
  templateUrl: "./bicycle-new.component.html",
  styleUrls: ["./bicycle-new.component.css"],
})
export class BicycleNewComponent implements OnInit {
  bicycle: any;
  colors: any[] = [
    {
      text: "Blanco",
    },
    {
      text: "Negro",
    },
    {
      text: "Rojo",
    },
    {
      text: "Verde",
    },
  ];
  models: any[] = [
    {
      text: "Ruta",
    },
    {
      text: "Cross",
    },
    {
      text: "Mountain",
    },
    {
      text: "Turismo",
    },
  ];

  constructor(private bicyclesService: BicycleService) {
    this.bicycle = {
      modelo: "",
      latitud: undefined,
      longitud: undefined,
      id: undefined,
    };
  }

  ngOnInit(): void {}

  createBicycle() {
    this.bicyclesService.create(this.bicycle).subscribe((response) => {
      alert(
        `Bicicleta ${response.body.bicycleId} con el id ${response.body._id} en la base de datos, creada con éxito`
      );
    });
  }
}
