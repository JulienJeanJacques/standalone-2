import { Injectable, Type } from '@angular/core';
    //
    import { D9E1qComponent } from '../../../../components/unity/d/d9/d9-e1q/d9-e1q';
import { D9E1rComponent } from '../../../../components/unity/d/d9/d9-e1r/d9-e1r';
import { D9E1iComponent } from '../../../../components/unity/d/d9/d9-e1i/d9-e1i';
import { D9E2qComponent } from '../../../../components/unity/d/d9/d9-e2q/d9-e2q';
import { D9E2rComponent } from '../../../../components/unity/d/d9/d9-e2r/d9-e2r';
import { D9E2iComponent } from '../../../../components/unity/d/d9/d9-e2i/d9-e2i';
import { D9E3qComponent } from '../../../../components/unity/d/d9/d9-e3q/d9-e3q';
import { D9E3rComponent } from '../../../../components/unity/d/d9/d9-e3r/d9-e3r';
import { D9E3iComponent } from '../../../../components/unity/d/d9/d9-e3i/d9-e3i';
import { D9E4qComponent } from '../../../../components/unity/d/d9/d9-e4q/d9-e4q';
import { D9E4rComponent } from '../../../../components/unity/d/d9/d9-e4r/d9-e4r';
import { D9E4iComponent } from '../../../../components/unity/d/d9/d9-e4i/d9-e4i';
import { D9E5qComponent } from '../../../../components/unity/d/d9/d9-e5q/d9-e5q';
import { D9E5rComponent } from '../../../../components/unity/d/d9/d9-e5r/d9-e5r';
import { D9E5iComponent } from '../../../../components/unity/d/d9/d9-e5i/d9-e5i';
import { D9E6qComponent } from '../../../../components/unity/d/d9/d9-e6q/d9-e6q';
import { D9E6rComponent } from '../../../../components/unity/d/d9/d9-e6r/d9-e6r';
import { D9E6iComponent } from '../../../../components/unity/d/d9/d9-e6i/d9-e6i';
import { D9E7qComponent } from '../../../../components/unity/d/d9/d9-e7q/d9-e7q';
import { D9E7rComponent } from '../../../../components/unity/d/d9/d9-e7r/d9-e7r';
import { D9E7iComponent } from '../../../../components/unity/d/d9/d9-e7i/d9-e7i';
import { D9E8qComponent } from '../../../../components/unity/d/d9/d9-e8q/d9-e8q';
import { D9E8rComponent } from '../../../../components/unity/d/d9/d9-e8r/d9-e8r';
import { D9E8iComponent } from '../../../../components/unity/d/d9/d9-e8i/d9-e8i';
import { D9E9qComponent } from '../../../../components/unity/d/d9/d9-e9q/d9-e9q';
import { D9E9rComponent } from '../../../../components/unity/d/d9/d9-e9r/d9-e9r';
import { D9E9iComponent } from '../../../../components/unity/d/d9/d9-e9i/d9-e9i';
import { D9E10qComponent } from '../../../../components/unity/d/d9/d9-e10q/d9-e10q';
import { D9E10rComponent } from '../../../../components/unity/d/d9/d9-e10r/d9-e10r';
import { D9E10iComponent } from '../../../../components/unity/d/d9/d9-e10i/d9-e10i';
import { D9E11qComponent } from '../../../../components/unity/d/d9/d9-e11q/d9-e11q';
import { D9E11rComponent } from '../../../../components/unity/d/d9/d9-e11r/d9-e11r';
import { D9E11iComponent } from '../../../../components/unity/d/d9/d9-e11i/d9-e11i';
import { D9E12qComponent } from '../../../../components/unity/d/d9/d9-e12q/d9-e12q';
import { D9E12rComponent } from '../../../../components/unity/d/d9/d9-e12r/d9-e12r';
import { D9E12iComponent } from '../../../../components/unity/d/d9/d9-e12i/d9-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD9 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd9_1q': D9E1qComponent,
        'd9_1r': D9E1rComponent,
        'd9_1i': D9E1iComponent,
        'd9_2q': D9E2qComponent,
        'd9_2r': D9E2rComponent,
        'd9_2i': D9E2iComponent,
        'd9_3q': D9E3qComponent,
        'd9_3r': D9E3rComponent,
        'd9_3i': D9E3iComponent,
        'd9_4q': D9E4qComponent,
        'd9_4r': D9E4rComponent,
        'd9_4i': D9E4iComponent,
        'd9_5q': D9E5qComponent,
        'd9_5r': D9E5rComponent,
        'd9_5i': D9E5iComponent,
        'd9_6q': D9E6qComponent,
        'd9_6r': D9E6rComponent,
        'd9_6i': D9E6iComponent,
        'd9_7q': D9E7qComponent,
        'd9_7r': D9E7rComponent,
        'd9_7i': D9E7iComponent,
        'd9_8q': D9E8qComponent,
        'd9_8r': D9E8rComponent,
        'd9_8i': D9E8iComponent,
        'd9_9q': D9E9qComponent,
        'd9_9r': D9E9rComponent,
        'd9_9i': D9E9iComponent,
        'd9_10q': D9E10qComponent,
        'd9_10r': D9E10rComponent,
        'd9_10i': D9E10iComponent,
        'd9_11q': D9E11qComponent,
        'd9_11r': D9E11rComponent,
        'd9_11i': D9E11iComponent,
        'd9_12q': D9E12qComponent,
        'd9_12r': D9E12rComponent,
        'd9_12i': D9E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    