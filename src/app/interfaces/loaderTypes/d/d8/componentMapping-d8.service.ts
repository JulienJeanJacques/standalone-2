import { Injectable, Type } from '@angular/core';
    //
    import { D8E1qComponent } from '../../../../components/unity/d/d8/d8-e1q/d8-e1q';
import { D8E1rComponent } from '../../../../components/unity/d/d8/d8-e1r/d8-e1r';
import { D8E1iComponent } from '../../../../components/unity/d/d8/d8-e1i/d8-e1i';
import { D8E2qComponent } from '../../../../components/unity/d/d8/d8-e2q/d8-e2q';
import { D8E2rComponent } from '../../../../components/unity/d/d8/d8-e2r/d8-e2r';
import { D8E2iComponent } from '../../../../components/unity/d/d8/d8-e2i/d8-e2i';
import { D8E3qComponent } from '../../../../components/unity/d/d8/d8-e3q/d8-e3q';
import { D8E3rComponent } from '../../../../components/unity/d/d8/d8-e3r/d8-e3r';
import { D8E3iComponent } from '../../../../components/unity/d/d8/d8-e3i/d8-e3i';
import { D8E4qComponent } from '../../../../components/unity/d/d8/d8-e4q/d8-e4q';
import { D8E4rComponent } from '../../../../components/unity/d/d8/d8-e4r/d8-e4r';
import { D8E4iComponent } from '../../../../components/unity/d/d8/d8-e4i/d8-e4i';
import { D8E5qComponent } from '../../../../components/unity/d/d8/d8-e5q/d8-e5q';
import { D8E5rComponent } from '../../../../components/unity/d/d8/d8-e5r/d8-e5r';
import { D8E5iComponent } from '../../../../components/unity/d/d8/d8-e5i/d8-e5i';
import { D8E6qComponent } from '../../../../components/unity/d/d8/d8-e6q/d8-e6q';
import { D8E6rComponent } from '../../../../components/unity/d/d8/d8-e6r/d8-e6r';
import { D8E6iComponent } from '../../../../components/unity/d/d8/d8-e6i/d8-e6i';
import { D8E7qComponent } from '../../../../components/unity/d/d8/d8-e7q/d8-e7q';
import { D8E7rComponent } from '../../../../components/unity/d/d8/d8-e7r/d8-e7r';
import { D8E7iComponent } from '../../../../components/unity/d/d8/d8-e7i/d8-e7i';
import { D8E8qComponent } from '../../../../components/unity/d/d8/d8-e8q/d8-e8q';
import { D8E8rComponent } from '../../../../components/unity/d/d8/d8-e8r/d8-e8r';
import { D8E8iComponent } from '../../../../components/unity/d/d8/d8-e8i/d8-e8i';
import { D8E9qComponent } from '../../../../components/unity/d/d8/d8-e9q/d8-e9q';
import { D8E9rComponent } from '../../../../components/unity/d/d8/d8-e9r/d8-e9r';
import { D8E9iComponent } from '../../../../components/unity/d/d8/d8-e9i/d8-e9i';
import { D8E10qComponent } from '../../../../components/unity/d/d8/d8-e10q/d8-e10q';
import { D8E10rComponent } from '../../../../components/unity/d/d8/d8-e10r/d8-e10r';
import { D8E10iComponent } from '../../../../components/unity/d/d8/d8-e10i/d8-e10i';
import { D8E11qComponent } from '../../../../components/unity/d/d8/d8-e11q/d8-e11q';
import { D8E11rComponent } from '../../../../components/unity/d/d8/d8-e11r/d8-e11r';
import { D8E11iComponent } from '../../../../components/unity/d/d8/d8-e11i/d8-e11i';
import { D8E12qComponent } from '../../../../components/unity/d/d8/d8-e12q/d8-e12q';
import { D8E12rComponent } from '../../../../components/unity/d/d8/d8-e12r/d8-e12r';
import { D8E12iComponent } from '../../../../components/unity/d/d8/d8-e12i/d8-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD8 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd8_1q': D8E1qComponent,
        'd8_1r': D8E1rComponent,
        'd8_1i': D8E1iComponent,
        'd8_2q': D8E2qComponent,
        'd8_2r': D8E2rComponent,
        'd8_2i': D8E2iComponent,
        'd8_3q': D8E3qComponent,
        'd8_3r': D8E3rComponent,
        'd8_3i': D8E3iComponent,
        'd8_4q': D8E4qComponent,
        'd8_4r': D8E4rComponent,
        'd8_4i': D8E4iComponent,
        'd8_5q': D8E5qComponent,
        'd8_5r': D8E5rComponent,
        'd8_5i': D8E5iComponent,
        'd8_6q': D8E6qComponent,
        'd8_6r': D8E6rComponent,
        'd8_6i': D8E6iComponent,
        'd8_7q': D8E7qComponent,
        'd8_7r': D8E7rComponent,
        'd8_7i': D8E7iComponent,
        'd8_8q': D8E8qComponent,
        'd8_8r': D8E8rComponent,
        'd8_8i': D8E8iComponent,
        'd8_9q': D8E9qComponent,
        'd8_9r': D8E9rComponent,
        'd8_9i': D8E9iComponent,
        'd8_10q': D8E10qComponent,
        'd8_10r': D8E10rComponent,
        'd8_10i': D8E10iComponent,
        'd8_11q': D8E11qComponent,
        'd8_11r': D8E11rComponent,
        'd8_11i': D8E11iComponent,
        'd8_12q': D8E12qComponent,
        'd8_12r': D8E12rComponent,
        'd8_12i': D8E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    