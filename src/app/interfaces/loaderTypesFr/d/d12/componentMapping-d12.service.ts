import { Injectable, Type } from '@angular/core';
    //
    import { D12E1qComponent } from '../../../../components/unity/d/d12/d12-e1q/d12-e1q';
import { D12E1rComponent } from '../../../../components/unity/d/d12/d12-e1r/d12-e1r';
import { D12E1iComponent } from '../../../../components/unity/d/d12/d12-e1i/d12-e1i';
import { D12E2qComponent } from '../../../../components/unity/d/d12/d12-e2q/d12-e2q';
import { D12E2rComponent } from '../../../../components/unity/d/d12/d12-e2r/d12-e2r';
import { D12E2iComponent } from '../../../../components/unity/d/d12/d12-e2i/d12-e2i';
import { D12E3qComponent } from '../../../../components/unity/d/d12/d12-e3q/d12-e3q';
import { D12E3rComponent } from '../../../../components/unity/d/d12/d12-e3r/d12-e3r';
import { D12E3iComponent } from '../../../../components/unity/d/d12/d12-e3i/d12-e3i';
import { D12E4qComponent } from '../../../../components/unity/d/d12/d12-e4q/d12-e4q';
import { D12E4rComponent } from '../../../../components/unity/d/d12/d12-e4r/d12-e4r';
import { D12E4iComponent } from '../../../../components/unity/d/d12/d12-e4i/d12-e4i';
import { D12E5qComponent } from '../../../../components/unity/d/d12/d12-e5q/d12-e5q';
import { D12E5rComponent } from '../../../../components/unity/d/d12/d12-e5r/d12-e5r';
import { D12E5iComponent } from '../../../../components/unity/d/d12/d12-e5i/d12-e5i';
import { D12E6qComponent } from '../../../../components/unity/d/d12/d12-e6q/d12-e6q';
import { D12E6rComponent } from '../../../../components/unity/d/d12/d12-e6r/d12-e6r';
import { D12E6iComponent } from '../../../../components/unity/d/d12/d12-e6i/d12-e6i';
import { D12E7qComponent } from '../../../../components/unity/d/d12/d12-e7q/d12-e7q';
import { D12E7rComponent } from '../../../../components/unity/d/d12/d12-e7r/d12-e7r';
import { D12E7iComponent } from '../../../../components/unity/d/d12/d12-e7i/d12-e7i';
import { D12E8qComponent } from '../../../../components/unity/d/d12/d12-e8q/d12-e8q';
import { D12E8rComponent } from '../../../../components/unity/d/d12/d12-e8r/d12-e8r';
import { D12E8iComponent } from '../../../../components/unity/d/d12/d12-e8i/d12-e8i';
import { D12E9qComponent } from '../../../../components/unity/d/d12/d12-e9q/d12-e9q';
import { D12E9rComponent } from '../../../../components/unity/d/d12/d12-e9r/d12-e9r';
import { D12E9iComponent } from '../../../../components/unity/d/d12/d12-e9i/d12-e9i';
import { D12E10qComponent } from '../../../../components/unity/d/d12/d12-e10q/d12-e10q';
import { D12E10rComponent } from '../../../../components/unity/d/d12/d12-e10r/d12-e10r';
import { D12E10iComponent } from '../../../../components/unity/d/d12/d12-e10i/d12-e10i';
import { D12E11qComponent } from '../../../../components/unity/d/d12/d12-e11q/d12-e11q';
import { D12E11rComponent } from '../../../../components/unity/d/d12/d12-e11r/d12-e11r';
import { D12E11iComponent } from '../../../../components/unity/d/d12/d12-e11i/d12-e11i';
import { D12E12qComponent } from '../../../../components/unity/d/d12/d12-e12q/d12-e12q';
import { D12E12rComponent } from '../../../../components/unity/d/d12/d12-e12r/d12-e12r';
import { D12E12iComponent } from '../../../../components/unity/d/d12/d12-e12i/d12-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD12 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd12_1q': D12E1qComponent,
        'd12_1r': D12E1rComponent,
        'd12_1i': D12E1iComponent,
        'd12_2q': D12E2qComponent,
        'd12_2r': D12E2rComponent,
        'd12_2i': D12E2iComponent,
        'd12_3q': D12E3qComponent,
        'd12_3r': D12E3rComponent,
        'd12_3i': D12E3iComponent,
        'd12_4q': D12E4qComponent,
        'd12_4r': D12E4rComponent,
        'd12_4i': D12E4iComponent,
        'd12_5q': D12E5qComponent,
        'd12_5r': D12E5rComponent,
        'd12_5i': D12E5iComponent,
        'd12_6q': D12E6qComponent,
        'd12_6r': D12E6rComponent,
        'd12_6i': D12E6iComponent,
        'd12_7q': D12E7qComponent,
        'd12_7r': D12E7rComponent,
        'd12_7i': D12E7iComponent,
        'd12_8q': D12E8qComponent,
        'd12_8r': D12E8rComponent,
        'd12_8i': D12E8iComponent,
        'd12_9q': D12E9qComponent,
        'd12_9r': D12E9rComponent,
        'd12_9i': D12E9iComponent,
        'd12_10q': D12E10qComponent,
        'd12_10r': D12E10rComponent,
        'd12_10i': D12E10iComponent,
        'd12_11q': D12E11qComponent,
        'd12_11r': D12E11rComponent,
        'd12_11i': D12E11iComponent,
        'd12_12q': D12E12qComponent,
        'd12_12r': D12E12rComponent,
        'd12_12i': D12E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    