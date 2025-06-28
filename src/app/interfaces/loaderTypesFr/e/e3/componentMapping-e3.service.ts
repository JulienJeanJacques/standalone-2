import { Injectable, Type } from '@angular/core';
    //
    import { E3E1qComponent } from '../../../../components/unity/e/e3/e3-e1q/e3-e1q';
import { E3E1rComponent } from '../../../../components/unity/e/e3/e3-e1r/e3-e1r';
import { E3E1iComponent } from '../../../../components/unity/e/e3/e3-e1i/e3-e1i';
import { E3E2qComponent } from '../../../../components/unity/e/e3/e3-e2q/e3-e2q';
import { E3E2rComponent } from '../../../../components/unity/e/e3/e3-e2r/e3-e2r';
import { E3E2iComponent } from '../../../../components/unity/e/e3/e3-e2i/e3-e2i';
import { E3E3qComponent } from '../../../../components/unity/e/e3/e3-e3q/e3-e3q';
import { E3E3rComponent } from '../../../../components/unity/e/e3/e3-e3r/e3-e3r';
import { E3E3iComponent } from '../../../../components/unity/e/e3/e3-e3i/e3-e3i';
import { E3E4qComponent } from '../../../../components/unity/e/e3/e3-e4q/e3-e4q';
import { E3E4rComponent } from '../../../../components/unity/e/e3/e3-e4r/e3-e4r';
import { E3E4iComponent } from '../../../../components/unity/e/e3/e3-e4i/e3-e4i';
import { E3E5qComponent } from '../../../../components/unity/e/e3/e3-e5q/e3-e5q';
import { E3E5rComponent } from '../../../../components/unity/e/e3/e3-e5r/e3-e5r';
import { E3E5iComponent } from '../../../../components/unity/e/e3/e3-e5i/e3-e5i';
import { E3E6qComponent } from '../../../../components/unity/e/e3/e3-e6q/e3-e6q';
import { E3E6rComponent } from '../../../../components/unity/e/e3/e3-e6r/e3-e6r';
import { E3E6iComponent } from '../../../../components/unity/e/e3/e3-e6i/e3-e6i';
import { E3E7qComponent } from '../../../../components/unity/e/e3/e3-e7q/e3-e7q';
import { E3E7rComponent } from '../../../../components/unity/e/e3/e3-e7r/e3-e7r';
import { E3E7iComponent } from '../../../../components/unity/e/e3/e3-e7i/e3-e7i';
import { E3E8qComponent } from '../../../../components/unity/e/e3/e3-e8q/e3-e8q';
import { E3E8rComponent } from '../../../../components/unity/e/e3/e3-e8r/e3-e8r';
import { E3E8iComponent } from '../../../../components/unity/e/e3/e3-e8i/e3-e8i';
import { E3E9qComponent } from '../../../../components/unity/e/e3/e3-e9q/e3-e9q';
import { E3E9rComponent } from '../../../../components/unity/e/e3/e3-e9r/e3-e9r';
import { E3E9iComponent } from '../../../../components/unity/e/e3/e3-e9i/e3-e9i';
import { E3E10qComponent } from '../../../../components/unity/e/e3/e3-e10q/e3-e10q';
import { E3E10rComponent } from '../../../../components/unity/e/e3/e3-e10r/e3-e10r';
import { E3E10iComponent } from '../../../../components/unity/e/e3/e3-e10i/e3-e10i';
import { E3E11qComponent } from '../../../../components/unity/e/e3/e3-e11q/e3-e11q';
import { E3E11rComponent } from '../../../../components/unity/e/e3/e3-e11r/e3-e11r';
import { E3E11iComponent } from '../../../../components/unity/e/e3/e3-e11i/e3-e11i';
import { E3E12qComponent } from '../../../../components/unity/e/e3/e3-e12q/e3-e12q';
import { E3E12rComponent } from '../../../../components/unity/e/e3/e3-e12r/e3-e12r';
import { E3E12iComponent } from '../../../../components/unity/e/e3/e3-e12i/e3-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE3 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e3_1q': E3E1qComponent,
        'e3_1r': E3E1rComponent,
        'e3_1i': E3E1iComponent,
        'e3_2q': E3E2qComponent,
        'e3_2r': E3E2rComponent,
        'e3_2i': E3E2iComponent,
        'e3_3q': E3E3qComponent,
        'e3_3r': E3E3rComponent,
        'e3_3i': E3E3iComponent,
        'e3_4q': E3E4qComponent,
        'e3_4r': E3E4rComponent,
        'e3_4i': E3E4iComponent,
        'e3_5q': E3E5qComponent,
        'e3_5r': E3E5rComponent,
        'e3_5i': E3E5iComponent,
        'e3_6q': E3E6qComponent,
        'e3_6r': E3E6rComponent,
        'e3_6i': E3E6iComponent,
        'e3_7q': E3E7qComponent,
        'e3_7r': E3E7rComponent,
        'e3_7i': E3E7iComponent,
        'e3_8q': E3E8qComponent,
        'e3_8r': E3E8rComponent,
        'e3_8i': E3E8iComponent,
        'e3_9q': E3E9qComponent,
        'e3_9r': E3E9rComponent,
        'e3_9i': E3E9iComponent,
        'e3_10q': E3E10qComponent,
        'e3_10r': E3E10rComponent,
        'e3_10i': E3E10iComponent,
        'e3_11q': E3E11qComponent,
        'e3_11r': E3E11rComponent,
        'e3_11i': E3E11iComponent,
        'e3_12q': E3E12qComponent,
        'e3_12r': E3E12rComponent,
        'e3_12i': E3E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    