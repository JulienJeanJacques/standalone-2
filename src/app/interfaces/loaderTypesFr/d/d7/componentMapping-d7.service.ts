import { Injectable, Type } from '@angular/core';
    //
    import { D7E1qComponent } from '../../../../components/unity/d/d7/d7-e1q/d7-e1q';
import { D7E1rComponent } from '../../../../components/unity/d/d7/d7-e1r/d7-e1r';
import { D7E1iComponent } from '../../../../components/unity/d/d7/d7-e1i/d7-e1i';
import { D7E2qComponent } from '../../../../components/unity/d/d7/d7-e2q/d7-e2q';
import { D7E2rComponent } from '../../../../components/unity/d/d7/d7-e2r/d7-e2r';
import { D7E2iComponent } from '../../../../components/unity/d/d7/d7-e2i/d7-e2i';
import { D7E3qComponent } from '../../../../components/unity/d/d7/d7-e3q/d7-e3q';
import { D7E3rComponent } from '../../../../components/unity/d/d7/d7-e3r/d7-e3r';
import { D7E3iComponent } from '../../../../components/unity/d/d7/d7-e3i/d7-e3i';
import { D7E4qComponent } from '../../../../components/unity/d/d7/d7-e4q/d7-e4q';
import { D7E4rComponent } from '../../../../components/unity/d/d7/d7-e4r/d7-e4r';
import { D7E4iComponent } from '../../../../components/unity/d/d7/d7-e4i/d7-e4i';
import { D7E5qComponent } from '../../../../components/unity/d/d7/d7-e5q/d7-e5q';
import { D7E5rComponent } from '../../../../components/unity/d/d7/d7-e5r/d7-e5r';
import { D7E5iComponent } from '../../../../components/unity/d/d7/d7-e5i/d7-e5i';
import { D7E6qComponent } from '../../../../components/unity/d/d7/d7-e6q/d7-e6q';
import { D7E6rComponent } from '../../../../components/unity/d/d7/d7-e6r/d7-e6r';
import { D7E6iComponent } from '../../../../components/unity/d/d7/d7-e6i/d7-e6i';
import { D7E7qComponent } from '../../../../components/unity/d/d7/d7-e7q/d7-e7q';
import { D7E7rComponent } from '../../../../components/unity/d/d7/d7-e7r/d7-e7r';
import { D7E7iComponent } from '../../../../components/unity/d/d7/d7-e7i/d7-e7i';
import { D7E8qComponent } from '../../../../components/unity/d/d7/d7-e8q/d7-e8q';
import { D7E8rComponent } from '../../../../components/unity/d/d7/d7-e8r/d7-e8r';
import { D7E8iComponent } from '../../../../components/unity/d/d7/d7-e8i/d7-e8i';
import { D7E9qComponent } from '../../../../components/unity/d/d7/d7-e9q/d7-e9q';
import { D7E9rComponent } from '../../../../components/unity/d/d7/d7-e9r/d7-e9r';
import { D7E9iComponent } from '../../../../components/unity/d/d7/d7-e9i/d7-e9i';
import { D7E10qComponent } from '../../../../components/unity/d/d7/d7-e10q/d7-e10q';
import { D7E10rComponent } from '../../../../components/unity/d/d7/d7-e10r/d7-e10r';
import { D7E10iComponent } from '../../../../components/unity/d/d7/d7-e10i/d7-e10i';
import { D7E11qComponent } from '../../../../components/unity/d/d7/d7-e11q/d7-e11q';
import { D7E11rComponent } from '../../../../components/unity/d/d7/d7-e11r/d7-e11r';
import { D7E11iComponent } from '../../../../components/unity/d/d7/d7-e11i/d7-e11i';
import { D7E12qComponent } from '../../../../components/unity/d/d7/d7-e12q/d7-e12q';
import { D7E12rComponent } from '../../../../components/unity/d/d7/d7-e12r/d7-e12r';
import { D7E12iComponent } from '../../../../components/unity/d/d7/d7-e12i/d7-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD7 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd7_1q': D7E1qComponent,
        'd7_1r': D7E1rComponent,
        'd7_1i': D7E1iComponent,
        'd7_2q': D7E2qComponent,
        'd7_2r': D7E2rComponent,
        'd7_2i': D7E2iComponent,
        'd7_3q': D7E3qComponent,
        'd7_3r': D7E3rComponent,
        'd7_3i': D7E3iComponent,
        'd7_4q': D7E4qComponent,
        'd7_4r': D7E4rComponent,
        'd7_4i': D7E4iComponent,
        'd7_5q': D7E5qComponent,
        'd7_5r': D7E5rComponent,
        'd7_5i': D7E5iComponent,
        'd7_6q': D7E6qComponent,
        'd7_6r': D7E6rComponent,
        'd7_6i': D7E6iComponent,
        'd7_7q': D7E7qComponent,
        'd7_7r': D7E7rComponent,
        'd7_7i': D7E7iComponent,
        'd7_8q': D7E8qComponent,
        'd7_8r': D7E8rComponent,
        'd7_8i': D7E8iComponent,
        'd7_9q': D7E9qComponent,
        'd7_9r': D7E9rComponent,
        'd7_9i': D7E9iComponent,
        'd7_10q': D7E10qComponent,
        'd7_10r': D7E10rComponent,
        'd7_10i': D7E10iComponent,
        'd7_11q': D7E11qComponent,
        'd7_11r': D7E11rComponent,
        'd7_11i': D7E11iComponent,
        'd7_12q': D7E12qComponent,
        'd7_12r': D7E12rComponent,
        'd7_12i': D7E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    