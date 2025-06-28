import { Injectable, Type } from '@angular/core';
    //
import { D2E1qComponent } from '../../../../components/unity/d/d2/d2-e1/d2-e1q/d2-e1q';
import { D2E1rComponent } from '../../../../components/unity/d/d2/d2-e1/d2-e1r/d2-e1r';
   
    export const ComponentMappingD2: { [key: string]: Type<any> } = {
        
        'd2_1q': D2E1qComponent,
        'd2_1r': D2E1rComponent,
    }
    
    