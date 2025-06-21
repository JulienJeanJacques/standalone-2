import { Injectable, Type } from '@angular/core';
    //
    import { E7E1qComponent } from '../../../../components/unity/e/e7/e7-e1q/e7-e1q';
import { E7E1rComponent } from '../../../../components/unity/e/e7/e7-e1r/e7-e1r';
import { E7E1iComponent } from '../../../../components/unity/e/e7/e7-e1i/e7-e1i';
import { E7E2qComponent } from '../../../../components/unity/e/e7/e7-e2q/e7-e2q';
import { E7E2rComponent } from '../../../../components/unity/e/e7/e7-e2r/e7-e2r';
import { E7E2iComponent } from '../../../../components/unity/e/e7/e7-e2i/e7-e2i';
import { E7E3qComponent } from '../../../../components/unity/e/e7/e7-e3q/e7-e3q';
import { E7E3rComponent } from '../../../../components/unity/e/e7/e7-e3r/e7-e3r';
import { E7E3iComponent } from '../../../../components/unity/e/e7/e7-e3i/e7-e3i';
import { E7E4qComponent } from '../../../../components/unity/e/e7/e7-e4q/e7-e4q';
import { E7E4rComponent } from '../../../../components/unity/e/e7/e7-e4r/e7-e4r';
import { E7E4iComponent } from '../../../../components/unity/e/e7/e7-e4i/e7-e4i';
import { E7E5qComponent } from '../../../../components/unity/e/e7/e7-e5q/e7-e5q';
import { E7E5rComponent } from '../../../../components/unity/e/e7/e7-e5r/e7-e5r';
import { E7E5iComponent } from '../../../../components/unity/e/e7/e7-e5i/e7-e5i';
import { E7E6qComponent } from '../../../../components/unity/e/e7/e7-e6q/e7-e6q';
import { E7E6rComponent } from '../../../../components/unity/e/e7/e7-e6r/e7-e6r';
import { E7E6iComponent } from '../../../../components/unity/e/e7/e7-e6i/e7-e6i';
import { E7E7qComponent } from '../../../../components/unity/e/e7/e7-e7q/e7-e7q';
import { E7E7rComponent } from '../../../../components/unity/e/e7/e7-e7r/e7-e7r';
import { E7E7iComponent } from '../../../../components/unity/e/e7/e7-e7i/e7-e7i';
import { E7E8qComponent } from '../../../../components/unity/e/e7/e7-e8q/e7-e8q';
import { E7E8rComponent } from '../../../../components/unity/e/e7/e7-e8r/e7-e8r';
import { E7E8iComponent } from '../../../../components/unity/e/e7/e7-e8i/e7-e8i';
import { E7E9qComponent } from '../../../../components/unity/e/e7/e7-e9q/e7-e9q';
import { E7E9rComponent } from '../../../../components/unity/e/e7/e7-e9r/e7-e9r';
import { E7E9iComponent } from '../../../../components/unity/e/e7/e7-e9i/e7-e9i';
import { E7E10qComponent } from '../../../../components/unity/e/e7/e7-e10q/e7-e10q';
import { E7E10rComponent } from '../../../../components/unity/e/e7/e7-e10r/e7-e10r';
import { E7E10iComponent } from '../../../../components/unity/e/e7/e7-e10i/e7-e10i';
import { E7E11qComponent } from '../../../../components/unity/e/e7/e7-e11q/e7-e11q';
import { E7E11rComponent } from '../../../../components/unity/e/e7/e7-e11r/e7-e11r';
import { E7E11iComponent } from '../../../../components/unity/e/e7/e7-e11i/e7-e11i';
import { E7E12qComponent } from '../../../../components/unity/e/e7/e7-e12q/e7-e12q';
import { E7E12rComponent } from '../../../../components/unity/e/e7/e7-e12r/e7-e12r';
import { E7E12iComponent } from '../../../../components/unity/e/e7/e7-e12i/e7-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE7 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e7_1q': E7E1qComponent,
        'e7_1r': E7E1rComponent,
        'e7_1i': E7E1iComponent,
        'e7_2q': E7E2qComponent,
        'e7_2r': E7E2rComponent,
        'e7_2i': E7E2iComponent,
        'e7_3q': E7E3qComponent,
        'e7_3r': E7E3rComponent,
        'e7_3i': E7E3iComponent,
        'e7_4q': E7E4qComponent,
        'e7_4r': E7E4rComponent,
        'e7_4i': E7E4iComponent,
        'e7_5q': E7E5qComponent,
        'e7_5r': E7E5rComponent,
        'e7_5i': E7E5iComponent,
        'e7_6q': E7E6qComponent,
        'e7_6r': E7E6rComponent,
        'e7_6i': E7E6iComponent,
        'e7_7q': E7E7qComponent,
        'e7_7r': E7E7rComponent,
        'e7_7i': E7E7iComponent,
        'e7_8q': E7E8qComponent,
        'e7_8r': E7E8rComponent,
        'e7_8i': E7E8iComponent,
        'e7_9q': E7E9qComponent,
        'e7_9r': E7E9rComponent,
        'e7_9i': E7E9iComponent,
        'e7_10q': E7E10qComponent,
        'e7_10r': E7E10rComponent,
        'e7_10i': E7E10iComponent,
        'e7_11q': E7E11qComponent,
        'e7_11r': E7E11rComponent,
        'e7_11i': E7E11iComponent,
        'e7_12q': E7E12qComponent,
        'e7_12r': E7E12rComponent,
        'e7_12i': E7E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    