import { Injectable, Type } from '@angular/core';
    //
    import { D6E1qComponent } from '../../../../components/unity/d/d6/d6-e1q/d6-e1q';
import { D6E1rComponent } from '../../../../components/unity/d/d6/d6-e1r/d6-e1r';
import { D6E1iComponent } from '../../../../components/unity/d/d6/d6-e1i/d6-e1i';
import { D6E2qComponent } from '../../../../components/unity/d/d6/d6-e2q/d6-e2q';
import { D6E2rComponent } from '../../../../components/unity/d/d6/d6-e2r/d6-e2r';
import { D6E2iComponent } from '../../../../components/unity/d/d6/d6-e2i/d6-e2i';
import { D6E3qComponent } from '../../../../components/unity/d/d6/d6-e3q/d6-e3q';
import { D6E3rComponent } from '../../../../components/unity/d/d6/d6-e3r/d6-e3r';
import { D6E3iComponent } from '../../../../components/unity/d/d6/d6-e3i/d6-e3i';
import { D6E4qComponent } from '../../../../components/unity/d/d6/d6-e4q/d6-e4q';
import { D6E4rComponent } from '../../../../components/unity/d/d6/d6-e4r/d6-e4r';
import { D6E4iComponent } from '../../../../components/unity/d/d6/d6-e4i/d6-e4i';
import { D6E5qComponent } from '../../../../components/unity/d/d6/d6-e5q/d6-e5q';
import { D6E5rComponent } from '../../../../components/unity/d/d6/d6-e5r/d6-e5r';
import { D6E5iComponent } from '../../../../components/unity/d/d6/d6-e5i/d6-e5i';
import { D6E6qComponent } from '../../../../components/unity/d/d6/d6-e6q/d6-e6q';
import { D6E6rComponent } from '../../../../components/unity/d/d6/d6-e6r/d6-e6r';
import { D6E6iComponent } from '../../../../components/unity/d/d6/d6-e6i/d6-e6i';
import { D6E7qComponent } from '../../../../components/unity/d/d6/d6-e7q/d6-e7q';
import { D6E7rComponent } from '../../../../components/unity/d/d6/d6-e7r/d6-e7r';
import { D6E7iComponent } from '../../../../components/unity/d/d6/d6-e7i/d6-e7i';
import { D6E8qComponent } from '../../../../components/unity/d/d6/d6-e8q/d6-e8q';
import { D6E8rComponent } from '../../../../components/unity/d/d6/d6-e8r/d6-e8r';
import { D6E8iComponent } from '../../../../components/unity/d/d6/d6-e8i/d6-e8i';
import { D6E9qComponent } from '../../../../components/unity/d/d6/d6-e9q/d6-e9q';
import { D6E9rComponent } from '../../../../components/unity/d/d6/d6-e9r/d6-e9r';
import { D6E9iComponent } from '../../../../components/unity/d/d6/d6-e9i/d6-e9i';
import { D6E10qComponent } from '../../../../components/unity/d/d6/d6-e10q/d6-e10q';
import { D6E10rComponent } from '../../../../components/unity/d/d6/d6-e10r/d6-e10r';
import { D6E10iComponent } from '../../../../components/unity/d/d6/d6-e10i/d6-e10i';
import { D6E11qComponent } from '../../../../components/unity/d/d6/d6-e11q/d6-e11q';
import { D6E11rComponent } from '../../../../components/unity/d/d6/d6-e11r/d6-e11r';
import { D6E11iComponent } from '../../../../components/unity/d/d6/d6-e11i/d6-e11i';
import { D6E12qComponent } from '../../../../components/unity/d/d6/d6-e12q/d6-e12q';
import { D6E12rComponent } from '../../../../components/unity/d/d6/d6-e12r/d6-e12r';
import { D6E12iComponent } from '../../../../components/unity/d/d6/d6-e12i/d6-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD6 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd6_1q': D6E1qComponent,
        'd6_1r': D6E1rComponent,
        'd6_1i': D6E1iComponent,
        'd6_2q': D6E2qComponent,
        'd6_2r': D6E2rComponent,
        'd6_2i': D6E2iComponent,
        'd6_3q': D6E3qComponent,
        'd6_3r': D6E3rComponent,
        'd6_3i': D6E3iComponent,
        'd6_4q': D6E4qComponent,
        'd6_4r': D6E4rComponent,
        'd6_4i': D6E4iComponent,
        'd6_5q': D6E5qComponent,
        'd6_5r': D6E5rComponent,
        'd6_5i': D6E5iComponent,
        'd6_6q': D6E6qComponent,
        'd6_6r': D6E6rComponent,
        'd6_6i': D6E6iComponent,
        'd6_7q': D6E7qComponent,
        'd6_7r': D6E7rComponent,
        'd6_7i': D6E7iComponent,
        'd6_8q': D6E8qComponent,
        'd6_8r': D6E8rComponent,
        'd6_8i': D6E8iComponent,
        'd6_9q': D6E9qComponent,
        'd6_9r': D6E9rComponent,
        'd6_9i': D6E9iComponent,
        'd6_10q': D6E10qComponent,
        'd6_10r': D6E10rComponent,
        'd6_10i': D6E10iComponent,
        'd6_11q': D6E11qComponent,
        'd6_11r': D6E11rComponent,
        'd6_11i': D6E11iComponent,
        'd6_12q': D6E12qComponent,
        'd6_12r': D6E12rComponent,
        'd6_12i': D6E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    