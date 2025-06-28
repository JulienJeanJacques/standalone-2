import { Injectable, Type } from '@angular/core';
    //
    import { E8E1qComponent } from '../../../../components/unity/e/e8/e8-e1q/e8-e1q';
import { E8E1rComponent } from '../../../../components/unity/e/e8/e8-e1r/e8-e1r';
import { E8E1iComponent } from '../../../../components/unity/e/e8/e8-e1i/e8-e1i';
import { E8E2qComponent } from '../../../../components/unity/e/e8/e8-e2q/e8-e2q';
import { E8E2rComponent } from '../../../../components/unity/e/e8/e8-e2r/e8-e2r';
import { E8E2iComponent } from '../../../../components/unity/e/e8/e8-e2i/e8-e2i';
import { E8E3qComponent } from '../../../../components/unity/e/e8/e8-e3q/e8-e3q';
import { E8E3rComponent } from '../../../../components/unity/e/e8/e8-e3r/e8-e3r';
import { E8E3iComponent } from '../../../../components/unity/e/e8/e8-e3i/e8-e3i';
import { E8E4qComponent } from '../../../../components/unity/e/e8/e8-e4q/e8-e4q';
import { E8E4rComponent } from '../../../../components/unity/e/e8/e8-e4r/e8-e4r';
import { E8E4iComponent } from '../../../../components/unity/e/e8/e8-e4i/e8-e4i';
import { E8E5qComponent } from '../../../../components/unity/e/e8/e8-e5q/e8-e5q';
import { E8E5rComponent } from '../../../../components/unity/e/e8/e8-e5r/e8-e5r';
import { E8E5iComponent } from '../../../../components/unity/e/e8/e8-e5i/e8-e5i';
import { E8E6qComponent } from '../../../../components/unity/e/e8/e8-e6q/e8-e6q';
import { E8E6rComponent } from '../../../../components/unity/e/e8/e8-e6r/e8-e6r';
import { E8E6iComponent } from '../../../../components/unity/e/e8/e8-e6i/e8-e6i';
import { E8E7qComponent } from '../../../../components/unity/e/e8/e8-e7q/e8-e7q';
import { E8E7rComponent } from '../../../../components/unity/e/e8/e8-e7r/e8-e7r';
import { E8E7iComponent } from '../../../../components/unity/e/e8/e8-e7i/e8-e7i';
import { E8E8qComponent } from '../../../../components/unity/e/e8/e8-e8q/e8-e8q';
import { E8E8rComponent } from '../../../../components/unity/e/e8/e8-e8r/e8-e8r';
import { E8E8iComponent } from '../../../../components/unity/e/e8/e8-e8i/e8-e8i';
import { E8E9qComponent } from '../../../../components/unity/e/e8/e8-e9q/e8-e9q';
import { E8E9rComponent } from '../../../../components/unity/e/e8/e8-e9r/e8-e9r';
import { E8E9iComponent } from '../../../../components/unity/e/e8/e8-e9i/e8-e9i';
import { E8E10qComponent } from '../../../../components/unity/e/e8/e8-e10q/e8-e10q';
import { E8E10rComponent } from '../../../../components/unity/e/e8/e8-e10r/e8-e10r';
import { E8E10iComponent } from '../../../../components/unity/e/e8/e8-e10i/e8-e10i';
import { E8E11qComponent } from '../../../../components/unity/e/e8/e8-e11q/e8-e11q';
import { E8E11rComponent } from '../../../../components/unity/e/e8/e8-e11r/e8-e11r';
import { E8E11iComponent } from '../../../../components/unity/e/e8/e8-e11i/e8-e11i';
import { E8E12qComponent } from '../../../../components/unity/e/e8/e8-e12q/e8-e12q';
import { E8E12rComponent } from '../../../../components/unity/e/e8/e8-e12r/e8-e12r';
import { E8E12iComponent } from '../../../../components/unity/e/e8/e8-e12i/e8-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE8 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e8_1q': E8E1qComponent,
        'e8_1r': E8E1rComponent,
        'e8_1i': E8E1iComponent,
        'e8_2q': E8E2qComponent,
        'e8_2r': E8E2rComponent,
        'e8_2i': E8E2iComponent,
        'e8_3q': E8E3qComponent,
        'e8_3r': E8E3rComponent,
        'e8_3i': E8E3iComponent,
        'e8_4q': E8E4qComponent,
        'e8_4r': E8E4rComponent,
        'e8_4i': E8E4iComponent,
        'e8_5q': E8E5qComponent,
        'e8_5r': E8E5rComponent,
        'e8_5i': E8E5iComponent,
        'e8_6q': E8E6qComponent,
        'e8_6r': E8E6rComponent,
        'e8_6i': E8E6iComponent,
        'e8_7q': E8E7qComponent,
        'e8_7r': E8E7rComponent,
        'e8_7i': E8E7iComponent,
        'e8_8q': E8E8qComponent,
        'e8_8r': E8E8rComponent,
        'e8_8i': E8E8iComponent,
        'e8_9q': E8E9qComponent,
        'e8_9r': E8E9rComponent,
        'e8_9i': E8E9iComponent,
        'e8_10q': E8E10qComponent,
        'e8_10r': E8E10rComponent,
        'e8_10i': E8E10iComponent,
        'e8_11q': E8E11qComponent,
        'e8_11r': E8E11rComponent,
        'e8_11i': E8E11iComponent,
        'e8_12q': E8E12qComponent,
        'e8_12r': E8E12rComponent,
        'e8_12i': E8E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    