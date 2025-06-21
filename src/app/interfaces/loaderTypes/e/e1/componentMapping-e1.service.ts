import { Injectable, Type } from '@angular/core';
    //
    import { E1E1qComponent } from '../../../../components/unity/e/e1/e1-e1q/e1-e1q';
import { E1E1rComponent } from '../../../../components/unity/e/e1/e1-e1r/e1-e1r';
import { E1E1iComponent } from '../../../../components/unity/e/e1/e1-e1i/e1-e1i';
import { E1E2qComponent } from '../../../../components/unity/e/e1/e1-e2q/e1-e2q';
import { E1E2rComponent } from '../../../../components/unity/e/e1/e1-e2r/e1-e2r';
import { E1E2iComponent } from '../../../../components/unity/e/e1/e1-e2i/e1-e2i';
import { E1E3qComponent } from '../../../../components/unity/e/e1/e1-e3q/e1-e3q';
import { E1E3rComponent } from '../../../../components/unity/e/e1/e1-e3r/e1-e3r';
import { E1E3iComponent } from '../../../../components/unity/e/e1/e1-e3i/e1-e3i';
import { E1E4qComponent } from '../../../../components/unity/e/e1/e1-e4q/e1-e4q';
import { E1E4rComponent } from '../../../../components/unity/e/e1/e1-e4r/e1-e4r';
import { E1E4iComponent } from '../../../../components/unity/e/e1/e1-e4i/e1-e4i';
import { E1E5qComponent } from '../../../../components/unity/e/e1/e1-e5q/e1-e5q';
import { E1E5rComponent } from '../../../../components/unity/e/e1/e1-e5r/e1-e5r';
import { E1E5iComponent } from '../../../../components/unity/e/e1/e1-e5i/e1-e5i';
import { E1E6qComponent } from '../../../../components/unity/e/e1/e1-e6q/e1-e6q';
import { E1E6rComponent } from '../../../../components/unity/e/e1/e1-e6r/e1-e6r';
import { E1E6iComponent } from '../../../../components/unity/e/e1/e1-e6i/e1-e6i';
import { E1E7qComponent } from '../../../../components/unity/e/e1/e1-e7q/e1-e7q';
import { E1E7rComponent } from '../../../../components/unity/e/e1/e1-e7r/e1-e7r';
import { E1E7iComponent } from '../../../../components/unity/e/e1/e1-e7i/e1-e7i';
import { E1E8qComponent } from '../../../../components/unity/e/e1/e1-e8q/e1-e8q';
import { E1E8rComponent } from '../../../../components/unity/e/e1/e1-e8r/e1-e8r';
import { E1E8iComponent } from '../../../../components/unity/e/e1/e1-e8i/e1-e8i';
import { E1E9qComponent } from '../../../../components/unity/e/e1/e1-e9q/e1-e9q';
import { E1E9rComponent } from '../../../../components/unity/e/e1/e1-e9r/e1-e9r';
import { E1E9iComponent } from '../../../../components/unity/e/e1/e1-e9i/e1-e9i';
import { E1E10qComponent } from '../../../../components/unity/e/e1/e1-e10q/e1-e10q';
import { E1E10rComponent } from '../../../../components/unity/e/e1/e1-e10r/e1-e10r';
import { E1E10iComponent } from '../../../../components/unity/e/e1/e1-e10i/e1-e10i';
import { E1E11qComponent } from '../../../../components/unity/e/e1/e1-e11q/e1-e11q';
import { E1E11rComponent } from '../../../../components/unity/e/e1/e1-e11r/e1-e11r';
import { E1E11iComponent } from '../../../../components/unity/e/e1/e1-e11i/e1-e11i';
import { E1E12qComponent } from '../../../../components/unity/e/e1/e1-e12q/e1-e12q';
import { E1E12rComponent } from '../../../../components/unity/e/e1/e1-e12r/e1-e12r';
import { E1E12iComponent } from '../../../../components/unity/e/e1/e1-e12i/e1-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE1 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e1_1q': E1E1qComponent,
        'e1_1r': E1E1rComponent,
        'e1_1i': E1E1iComponent,
        'e1_2q': E1E2qComponent,
        'e1_2r': E1E2rComponent,
        'e1_2i': E1E2iComponent,
        'e1_3q': E1E3qComponent,
        'e1_3r': E1E3rComponent,
        'e1_3i': E1E3iComponent,
        'e1_4q': E1E4qComponent,
        'e1_4r': E1E4rComponent,
        'e1_4i': E1E4iComponent,
        'e1_5q': E1E5qComponent,
        'e1_5r': E1E5rComponent,
        'e1_5i': E1E5iComponent,
        'e1_6q': E1E6qComponent,
        'e1_6r': E1E6rComponent,
        'e1_6i': E1E6iComponent,
        'e1_7q': E1E7qComponent,
        'e1_7r': E1E7rComponent,
        'e1_7i': E1E7iComponent,
        'e1_8q': E1E8qComponent,
        'e1_8r': E1E8rComponent,
        'e1_8i': E1E8iComponent,
        'e1_9q': E1E9qComponent,
        'e1_9r': E1E9rComponent,
        'e1_9i': E1E9iComponent,
        'e1_10q': E1E10qComponent,
        'e1_10r': E1E10rComponent,
        'e1_10i': E1E10iComponent,
        'e1_11q': E1E11qComponent,
        'e1_11r': E1E11rComponent,
        'e1_11i': E1E11iComponent,
        'e1_12q': E1E12qComponent,
        'e1_12r': E1E12rComponent,
        'e1_12i': E1E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    