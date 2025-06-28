import { Injectable, Type } from '@angular/core';
    //
    import { E4E1qComponent } from '../../../../components/unity/e/e4/e4-e1q/e4-e1q';
import { E4E1rComponent } from '../../../../components/unity/e/e4/e4-e1r/e4-e1r';
import { E4E1iComponent } from '../../../../components/unity/e/e4/e4-e1i/e4-e1i';
import { E4E2qComponent } from '../../../../components/unity/e/e4/e4-e2q/e4-e2q';
import { E4E2rComponent } from '../../../../components/unity/e/e4/e4-e2r/e4-e2r';
import { E4E2iComponent } from '../../../../components/unity/e/e4/e4-e2i/e4-e2i';
import { E4E3qComponent } from '../../../../components/unity/e/e4/e4-e3q/e4-e3q';
import { E4E3rComponent } from '../../../../components/unity/e/e4/e4-e3r/e4-e3r';
import { E4E3iComponent } from '../../../../components/unity/e/e4/e4-e3i/e4-e3i';
import { E4E4qComponent } from '../../../../components/unity/e/e4/e4-e4q/e4-e4q';
import { E4E4rComponent } from '../../../../components/unity/e/e4/e4-e4r/e4-e4r';
import { E4E4iComponent } from '../../../../components/unity/e/e4/e4-e4i/e4-e4i';
import { E4E5qComponent } from '../../../../components/unity/e/e4/e4-e5q/e4-e5q';
import { E4E5rComponent } from '../../../../components/unity/e/e4/e4-e5r/e4-e5r';
import { E4E5iComponent } from '../../../../components/unity/e/e4/e4-e5i/e4-e5i';
import { E4E6qComponent } from '../../../../components/unity/e/e4/e4-e6q/e4-e6q';
import { E4E6rComponent } from '../../../../components/unity/e/e4/e4-e6r/e4-e6r';
import { E4E6iComponent } from '../../../../components/unity/e/e4/e4-e6i/e4-e6i';
import { E4E7qComponent } from '../../../../components/unity/e/e4/e4-e7q/e4-e7q';
import { E4E7rComponent } from '../../../../components/unity/e/e4/e4-e7r/e4-e7r';
import { E4E7iComponent } from '../../../../components/unity/e/e4/e4-e7i/e4-e7i';
import { E4E8qComponent } from '../../../../components/unity/e/e4/e4-e8q/e4-e8q';
import { E4E8rComponent } from '../../../../components/unity/e/e4/e4-e8r/e4-e8r';
import { E4E8iComponent } from '../../../../components/unity/e/e4/e4-e8i/e4-e8i';
import { E4E9qComponent } from '../../../../components/unity/e/e4/e4-e9q/e4-e9q';
import { E4E9rComponent } from '../../../../components/unity/e/e4/e4-e9r/e4-e9r';
import { E4E9iComponent } from '../../../../components/unity/e/e4/e4-e9i/e4-e9i';
import { E4E10qComponent } from '../../../../components/unity/e/e4/e4-e10q/e4-e10q';
import { E4E10rComponent } from '../../../../components/unity/e/e4/e4-e10r/e4-e10r';
import { E4E10iComponent } from '../../../../components/unity/e/e4/e4-e10i/e4-e10i';
import { E4E11qComponent } from '../../../../components/unity/e/e4/e4-e11q/e4-e11q';
import { E4E11rComponent } from '../../../../components/unity/e/e4/e4-e11r/e4-e11r';
import { E4E11iComponent } from '../../../../components/unity/e/e4/e4-e11i/e4-e11i';
import { E4E12qComponent } from '../../../../components/unity/e/e4/e4-e12q/e4-e12q';
import { E4E12rComponent } from '../../../../components/unity/e/e4/e4-e12r/e4-e12r';
import { E4E12iComponent } from '../../../../components/unity/e/e4/e4-e12i/e4-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE4 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e4_1q': E4E1qComponent,
        'e4_1r': E4E1rComponent,
        'e4_1i': E4E1iComponent,
        'e4_2q': E4E2qComponent,
        'e4_2r': E4E2rComponent,
        'e4_2i': E4E2iComponent,
        'e4_3q': E4E3qComponent,
        'e4_3r': E4E3rComponent,
        'e4_3i': E4E3iComponent,
        'e4_4q': E4E4qComponent,
        'e4_4r': E4E4rComponent,
        'e4_4i': E4E4iComponent,
        'e4_5q': E4E5qComponent,
        'e4_5r': E4E5rComponent,
        'e4_5i': E4E5iComponent,
        'e4_6q': E4E6qComponent,
        'e4_6r': E4E6rComponent,
        'e4_6i': E4E6iComponent,
        'e4_7q': E4E7qComponent,
        'e4_7r': E4E7rComponent,
        'e4_7i': E4E7iComponent,
        'e4_8q': E4E8qComponent,
        'e4_8r': E4E8rComponent,
        'e4_8i': E4E8iComponent,
        'e4_9q': E4E9qComponent,
        'e4_9r': E4E9rComponent,
        'e4_9i': E4E9iComponent,
        'e4_10q': E4E10qComponent,
        'e4_10r': E4E10rComponent,
        'e4_10i': E4E10iComponent,
        'e4_11q': E4E11qComponent,
        'e4_11r': E4E11rComponent,
        'e4_11i': E4E11iComponent,
        'e4_12q': E4E12qComponent,
        'e4_12r': E4E12rComponent,
        'e4_12i': E4E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    