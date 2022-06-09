import { Bicycle } from "../models/bicycle.model";

export class BicycleFactory {
  static toModel(dto: any): any {
    if (dto.longitud === "undefined" || dto.latitud === "undefined") {
      return;
    }
    return {
      id: dto.id,
      bicycleId: dto.id,
      modelo: dto.modelo,
      latitud: dto.latitud ?? 0,
      longitud: dto.longitud ?? 0,
    };
  }
}
