import { Bicycle } from "../../models/bicycle.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BicycleService {
  constructor(private http: HttpClient) {}

  create(bicycle: Bicycle) {
    return this.http.post<any>(`${environment.bicyclesApi}`, bicycle);
  }

  read() {
    return this.http.get<any>(`${environment.bicyclesApi}`);
  }

  readById(bicicletaId: String) {
    return this.http.get<any>(`${environment.bicyclesApi}/${bicicletaId}`);
  }

  update(bicycle: Bicycle) {
    return this.http.put<any>(
      `${environment.bicyclesApi}/${bicycle._id}`,
      bicycle
    );
  }

  updateById(bicycle: Bicycle) {
    return this.http.put<any>(
      `${environment.bicyclesApi}/${bicycle.id}`,
      bicycle
    );
  }

  delete(id: String) {
    return this.http
      .delete<any>(`${environment.bicyclesApi}/${id}`)
      .toPromise()
      .then((data) => {
        alert(data.body);
      });
  }
}
