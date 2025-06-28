import { Injectable, Type }    from '@angular/core';
import { ComponentMappingD1 }  from '../interfaces/loaderTypes/d/d1/componentMapping-d1';
import { ComponentMappingD2 }  from '../interfaces/loaderTypes/d/d2/componentMapping-d2';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderEnService {
  private k: string;

  constructor() {
    this.k = 'd1'; // Valeur par défaut
  }

  setK(value: string) {
    this.k = value;
  }
  getComponent(componentName: string): Type<any> | null {
    switch (this.k) {
      case 'd1':return ComponentMappingD1[componentName] || null;
      case 'd2':return ComponentMappingD2[componentName] || null;
      default:return null; // Retourne null si k ne correspond à aucun mappage
    }
  }
}
