import { Injectable, Type } from '@angular/core';
    //
    import { D11E1qComponent } from '../../../../components/unity/d/d11/d11-e1q/d11-e1q';
import { D11E1rComponent } from '../../../../components/unity/d/d11/d11-e1r/d11-e1r';
import { D11E1iComponent } from '../../../../components/unity/d/d11/d11-e1i/d11-e1i';
import { D11E2qComponent } from '../../../../components/unity/d/d11/d11-e2q/d11-e2q';
import { D11E2rComponent } from '../../../../components/unity/d/d11/d11-e2r/d11-e2r';
import { D11E2iComponent } from '../../../../components/unity/d/d11/d11-e2i/d11-e2i';
import { D11E3qComponent } from '../../../../components/unity/d/d11/d11-e3q/d11-e3q';
import { D11E3rComponent } from '../../../../components/unity/d/d11/d11-e3r/d11-e3r';
import { D11E3iComponent } from '../../../../components/unity/d/d11/d11-e3i/d11-e3i';
import { D11E4qComponent } from '../../../../components/unity/d/d11/d11-e4q/d11-e4q';
import { D11E4rComponent } from '../../../../components/unity/d/d11/d11-e4r/d11-e4r';
import { D11E4iComponent } from '../../../../components/unity/d/d11/d11-e4i/d11-e4i';
import { D11E5qComponent } from '../../../../components/unity/d/d11/d11-e5q/d11-e5q';
import { D11E5rComponent } from '../../../../components/unity/d/d11/d11-e5r/d11-e5r';
import { D11E5iComponent } from '../../../../components/unity/d/d11/d11-e5i/d11-e5i';
import { D11E6qComponent } from '../../../../components/unity/d/d11/d11-e6q/d11-e6q';
import { D11E6rComponent } from '../../../../components/unity/d/d11/d11-e6r/d11-e6r';
import { D11E6iComponent } from '../../../../components/unity/d/d11/d11-e6i/d11-e6i';
import { D11E7qComponent } from '../../../../components/unity/d/d11/d11-e7q/d11-e7q';
import { D11E7rComponent } from '../../../../components/unity/d/d11/d11-e7r/d11-e7r';
import { D11E7iComponent } from '../../../../components/unity/d/d11/d11-e7i/d11-e7i';
import { D11E8qComponent } from '../../../../components/unity/d/d11/d11-e8q/d11-e8q';
import { D11E8rComponent } from '../../../../components/unity/d/d11/d11-e8r/d11-e8r';
import { D11E8iComponent } from '../../../../components/unity/d/d11/d11-e8i/d11-e8i';
import { D11E9qComponent } from '../../../../components/unity/d/d11/d11-e9q/d11-e9q';
import { D11E9rComponent } from '../../../../components/unity/d/d11/d11-e9r/d11-e9r';
import { D11E9iComponent } from '../../../../components/unity/d/d11/d11-e9i/d11-e9i';
import { D11E10qComponent } from '../../../../components/unity/d/d11/d11-e10q/d11-e10q';
import { D11E10rComponent } from '../../../../components/unity/d/d11/d11-e10r/d11-e10r';
import { D11E10iComponent } from '../../../../components/unity/d/d11/d11-e10i/d11-e10i';
import { D11E11qComponent } from '../../../../components/unity/d/d11/d11-e11q/d11-e11q';
import { D11E11rComponent } from '../../../../components/unity/d/d11/d11-e11r/d11-e11r';
import { D11E11iComponent } from '../../../../components/unity/d/d11/d11-e11i/d11-e11i';
import { D11E12qComponent } from '../../../../components/unity/d/d11/d11-e12q/d11-e12q';
import { D11E12rComponent } from '../../../../components/unity/d/d11/d11-e12r/d11-e12r';
import { D11E12iComponent } from '../../../../components/unity/d/d11/d11-e12i/d11-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD11 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd11_1q': D11E1qComponent,
        'd11_1r': D11E1rComponent,
        'd11_1i': D11E1iComponent,
        'd11_2q': D11E2qComponent,
        'd11_2r': D11E2rComponent,
        'd11_2i': D11E2iComponent,
        'd11_3q': D11E3qComponent,
        'd11_3r': D11E3rComponent,
        'd11_3i': D11E3iComponent,
        'd11_4q': D11E4qComponent,
        'd11_4r': D11E4rComponent,
        'd11_4i': D11E4iComponent,
        'd11_5q': D11E5qComponent,
        'd11_5r': D11E5rComponent,
        'd11_5i': D11E5iComponent,
        'd11_6q': D11E6qComponent,
        'd11_6r': D11E6rComponent,
        'd11_6i': D11E6iComponent,
        'd11_7q': D11E7qComponent,
        'd11_7r': D11E7rComponent,
        'd11_7i': D11E7iComponent,
        'd11_8q': D11E8qComponent,
        'd11_8r': D11E8rComponent,
        'd11_8i': D11E8iComponent,
        'd11_9q': D11E9qComponent,
        'd11_9r': D11E9rComponent,
        'd11_9i': D11E9iComponent,
        'd11_10q': D11E10qComponent,
        'd11_10r': D11E10rComponent,
        'd11_10i': D11E10iComponent,
        'd11_11q': D11E11qComponent,
        'd11_11r': D11E11rComponent,
        'd11_11i': D11E11iComponent,
        'd11_12q': D11E12qComponent,
        'd11_12r': D11E12rComponent,
        'd11_12i': D11E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    