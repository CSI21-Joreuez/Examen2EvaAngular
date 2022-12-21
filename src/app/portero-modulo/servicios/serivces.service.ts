import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Portero } from '../interface/portero';

@Injectable({
  providedIn: 'root'
})
export class SerivcesService {

  private coleccion = 'Porteros';
  constructor(private firebase: AngularFirestore) { }

  //Leer Todos Los Porteros de la coleccion
  getAll(){
    return this.firebase.collection(this.coleccion).snapshotChanges();
  }

  //Obtener un solo Portero
  getPortero(id:string){
    return this.firebase.collection(this.coleccion).doc(id).snapshotChanges();
  }

  //Obtener el mes de voluntariado
  getMes(mes_dispo:string){
  return this.firebase.collection(this.coleccion, ref =>ref.where('mes_dispo', '==', mes_dispo)).snapshotChanges();
  }

  //Crear un Nuevo Portero
  newPortero(port: Portero)
  {
    return this.firebase.collection(this.coleccion).add(port)
  }

  //Actualizar la informacion de un portero
  updatePortero(id:string, port:Portero)
  {
    return this.firebase.collection(this.coleccion).doc(id).update(port);
  }

  //Borrar un portero de la coleccion para no contar mas con el
  deletePortero(id: string)
  {
    return this.firebase.collection(this.coleccion).doc(id).delete();
  }
}
