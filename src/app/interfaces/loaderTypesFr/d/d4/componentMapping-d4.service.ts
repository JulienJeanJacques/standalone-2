import { Injectable, Type } from '@angular/core';
    //
    import { D4E1qComponent } from '../../../../components/unity/d/d4/d4-e1q/d4-e1q';
import { D4E1rComponent } from '../../../../components/unity/d/d4/d4-e1r/d4-e1r';
import { D4E1iComponent } from '../../../../components/unity/d/d4/d4-e1i/d4-e1i';
import { D4E2qComponent } from '../../../../components/unity/d/d4/d4-e2q/d4-e2q';
import { D4E2rComponent } from '../../../../components/unity/d/d4/d4-e2r/d4-e2r';
import { D4E2iComponent } from '../../../../components/unity/d/d4/d4-e2i/d4-e2i';
import { D4E3qComponent } from '../../../../components/unity/d/d4/d4-e3q/d4-e3q';
import { D4E3rComponent } from '../../../../components/unity/d/d4/d4-e3r/d4-e3r';
import { D4E3iComponent } from '../../../../components/unity/d/d4/d4-e3i/d4-e3i';
import { D4E4qComponent } from '../../../../components/unity/d/d4/d4-e4q/d4-e4q';
import { D4E4rComponent } from '../../../../components/unity/d/d4/d4-e4r/d4-e4r';
import { D4E4iComponent } from '../../../../components/unity/d/d4/d4-e4i/d4-e4i';
import { D4E5qComponent } from '../../../../components/unity/d/d4/d4-e5q/d4-e5q';
import { D4E5rComponent } from '../../../../components/unity/d/d4/d4-e5r/d4-e5r';
import { D4E5iComponent } from '../../../../components/unity/d/d4/d4-e5i/d4-e5i';
import { D4E6qComponent } from '../../../../components/unity/d/d4/d4-e6q/d4-e6q';
import { D4E6rComponent } from '../../../../components/unity/d/d4/d4-e6r/d4-e6r';
import { D4E6iComponent } from '../../../../components/unity/d/d4/d4-e6i/d4-e6i';
import { D4E7qComponent } from '../../../../components/unity/d/d4/d4-e7q/d4-e7q';
import { D4E7rComponent } from '../../../../components/unity/d/d4/d4-e7r/d4-e7r';
import { D4E7iComponent } from '../../../../components/unity/d/d4/d4-e7i/d4-e7i';
import { D4E8qComponent } from '../../../../components/unity/d/d4/d4-e8q/d4-e8q';
import { D4E8rComponent } from '../../../../components/unity/d/d4/d4-e8r/d4-e8r';
import { D4E8iComponent } from '../../../../components/unity/d/d4/d4-e8i/d4-e8i';
import { D4E9qComponent } from '../../../../components/unity/d/d4/d4-e9q/d4-e9q';
import { D4E9rComponent } from '../../../../components/unity/d/d4/d4-e9r/d4-e9r';
import { D4E9iComponent } from '../../../../components/unity/d/d4/d4-e9i/d4-e9i';
import { D4E10qComponent } from '../../../../components/unity/d/d4/d4-e10q/d4-e10q';
import { D4E10rComponent } from '../../../../components/unity/d/d4/d4-e10r/d4-e10r';
import { D4E10iComponent } from '../../../../components/unity/d/d4/d4-e10i/d4-e10i';
import { D4E11qComponent } from '../../../../components/unity/d/d4/d4-e11q/d4-e11q';
import { D4E11rComponent } from '../../../../components/unity/d/d4/d4-e11r/d4-e11r';
import { D4E11iComponent } from '../../../../components/unity/d/d4/d4-e11i/d4-e11i';
import { D4E12qComponent } from '../../../../components/unity/d/d4/d4-e12q/d4-e12q';
import { D4E12rComponent } from '../../../../components/unity/d/d4/d4-e12r/d4-e12r';
import { D4E12iComponent } from '../../../../components/unity/d/d4/d4-e12i/d4-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD4 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd4_1q': D4E1qComponent,
        'd4_1r': D4E1rComponent,
        'd4_1i': D4E1iComponent,
        'd4_2q': D4E2qComponent,
        'd4_2r': D4E2rComponent,
        'd4_2i': D4E2iComponent,
        'd4_3q': D4E3qComponent,
        'd4_3r': D4E3rComponent,
        'd4_3i': D4E3iComponent,
        'd4_4q': D4E4qComponent,
        'd4_4r': D4E4rComponent,
        'd4_4i': D4E4iComponent,
        'd4_5q': D4E5qComponent,
        'd4_5r': D4E5rComponent,
        'd4_5i': D4E5iComponent,
        'd4_6q': D4E6qComponent,
        'd4_6r': D4E6rComponent,
        'd4_6i': D4E6iComponent,
        'd4_7q': D4E7qComponent,
        'd4_7r': D4E7rComponent,
        'd4_7i': D4E7iComponent,
        'd4_8q': D4E8qComponent,
        'd4_8r': D4E8rComponent,
        'd4_8i': D4E8iComponent,
        'd4_9q': D4E9qComponent,
        'd4_9r': D4E9rComponent,
        'd4_9i': D4E9iComponent,
        'd4_10q': D4E10qComponent,
        'd4_10r': D4E10rComponent,
        'd4_10i': D4E10iComponent,
        'd4_11q': D4E11qComponent,
        'd4_11r': D4E11rComponent,
        'd4_11i': D4E11iComponent,
        'd4_12q': D4E12qComponent,
        'd4_12r': D4E12rComponent,
        'd4_12i': D4E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    