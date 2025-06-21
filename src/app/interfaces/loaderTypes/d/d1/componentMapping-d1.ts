import { Type } from '@angular/core';
    //
import { D1E1qComponent } from '../../../../components/unity/d/d1/d1-e1/d1-e1q/d1-e1q';
import { D1E1rComponent } from '../../../../components/unity/d/d1/d1-e1/d1-e1r/d1-e1r';
import { D1E1iComponent } from '../../../../components/unity/d/d1/d1-e1/d1-e1i/d1-e1i';

// import { D1E2qComponent } from '../../../../components/unity/d/d1/d1-e2/d1-e2q/';
// import { D1E2rComponent } from '../../../../components/unity/d/d1/d1-e1/d1-e1r/d1-e1r';
// import { D1E2iComponent } from '../../../../components/unity/d/d1/d1-e1/d1-e1i/d1-e1i';
    
   
    export const ComponentMappingD1: { [key: string]: Type<any> } = {
        'd1_1q': D1E1qComponent,
        'd1_1r': D1E1rComponent,
        'd1_1i': D1E1iComponent,
    };
     
    