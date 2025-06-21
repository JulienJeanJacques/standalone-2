import { Injectable, Type } from '@angular/core';
    //
    import { D5E1qComponent } from '../../../../components/unity/d/d5/d5-e1q/d5-e1q';
import { D5E1rComponent } from '../../../../components/unity/d/d5/d5-e1r/d5-e1r';
import { D5E1iComponent } from '../../../../components/unity/d/d5/d5-e1i/d5-e1i';
import { D5E2qComponent } from '../../../../components/unity/d/d5/d5-e2q/d5-e2q';
import { D5E2rComponent } from '../../../../components/unity/d/d5/d5-e2r/d5-e2r';
import { D5E2iComponent } from '../../../../components/unity/d/d5/d5-e2i/d5-e2i';
import { D5E3qComponent } from '../../../../components/unity/d/d5/d5-e3q/d5-e3q';
import { D5E3rComponent } from '../../../../components/unity/d/d5/d5-e3r/d5-e3r';
import { D5E3iComponent } from '../../../../components/unity/d/d5/d5-e3i/d5-e3i';
import { D5E4qComponent } from '../../../../components/unity/d/d5/d5-e4q/d5-e4q';
import { D5E4rComponent } from '../../../../components/unity/d/d5/d5-e4r/d5-e4r';
import { D5E4iComponent } from '../../../../components/unity/d/d5/d5-e4i/d5-e4i';
import { D5E5qComponent } from '../../../../components/unity/d/d5/d5-e5q/d5-e5q';
import { D5E5rComponent } from '../../../../components/unity/d/d5/d5-e5r/d5-e5r';
import { D5E5iComponent } from '../../../../components/unity/d/d5/d5-e5i/d5-e5i';
import { D5E6qComponent } from '../../../../components/unity/d/d5/d5-e6q/d5-e6q';
import { D5E6rComponent } from '../../../../components/unity/d/d5/d5-e6r/d5-e6r';
import { D5E6iComponent } from '../../../../components/unity/d/d5/d5-e6i/d5-e6i';
import { D5E7qComponent } from '../../../../components/unity/d/d5/d5-e7q/d5-e7q';
import { D5E7rComponent } from '../../../../components/unity/d/d5/d5-e7r/d5-e7r';
import { D5E7iComponent } from '../../../../components/unity/d/d5/d5-e7i/d5-e7i';
import { D5E8qComponent } from '../../../../components/unity/d/d5/d5-e8q/d5-e8q';
import { D5E8rComponent } from '../../../../components/unity/d/d5/d5-e8r/d5-e8r';
import { D5E8iComponent } from '../../../../components/unity/d/d5/d5-e8i/d5-e8i';
import { D5E9qComponent } from '../../../../components/unity/d/d5/d5-e9q/d5-e9q';
import { D5E9rComponent } from '../../../../components/unity/d/d5/d5-e9r/d5-e9r';
import { D5E9iComponent } from '../../../../components/unity/d/d5/d5-e9i/d5-e9i';
import { D5E10qComponent } from '../../../../components/unity/d/d5/d5-e10q/d5-e10q';
import { D5E10rComponent } from '../../../../components/unity/d/d5/d5-e10r/d5-e10r';
import { D5E10iComponent } from '../../../../components/unity/d/d5/d5-e10i/d5-e10i';
import { D5E11qComponent } from '../../../../components/unity/d/d5/d5-e11q/d5-e11q';
import { D5E11rComponent } from '../../../../components/unity/d/d5/d5-e11r/d5-e11r';
import { D5E11iComponent } from '../../../../components/unity/d/d5/d5-e11i/d5-e11i';
import { D5E12qComponent } from '../../../../components/unity/d/d5/d5-e12q/d5-e12q';
import { D5E12rComponent } from '../../../../components/unity/d/d5/d5-e12r/d5-e12r';
import { D5E12iComponent } from '../../../../components/unity/d/d5/d5-e12i/d5-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD5 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd5_1q': D5E1qComponent,
        'd5_1r': D5E1rComponent,
        'd5_1i': D5E1iComponent,
        'd5_2q': D5E2qComponent,
        'd5_2r': D5E2rComponent,
        'd5_2i': D5E2iComponent,
        'd5_3q': D5E3qComponent,
        'd5_3r': D5E3rComponent,
        'd5_3i': D5E3iComponent,
        'd5_4q': D5E4qComponent,
        'd5_4r': D5E4rComponent,
        'd5_4i': D5E4iComponent,
        'd5_5q': D5E5qComponent,
        'd5_5r': D5E5rComponent,
        'd5_5i': D5E5iComponent,
        'd5_6q': D5E6qComponent,
        'd5_6r': D5E6rComponent,
        'd5_6i': D5E6iComponent,
        'd5_7q': D5E7qComponent,
        'd5_7r': D5E7rComponent,
        'd5_7i': D5E7iComponent,
        'd5_8q': D5E8qComponent,
        'd5_8r': D5E8rComponent,
        'd5_8i': D5E8iComponent,
        'd5_9q': D5E9qComponent,
        'd5_9r': D5E9rComponent,
        'd5_9i': D5E9iComponent,
        'd5_10q': D5E10qComponent,
        'd5_10r': D5E10rComponent,
        'd5_10i': D5E10iComponent,
        'd5_11q': D5E11qComponent,
        'd5_11r': D5E11rComponent,
        'd5_11i': D5E11iComponent,
        'd5_12q': D5E12qComponent,
        'd5_12r': D5E12rComponent,
        'd5_12i': D5E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    