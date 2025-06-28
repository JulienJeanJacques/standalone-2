import { Injectable, Type } from '@angular/core';
    //
    import { E10E1qComponent } from '../../../../components/unity/e/e10/e10-e1q/e10-e1q';
import { E10E1rComponent } from '../../../../components/unity/e/e10/e10-e1r/e10-e1r';
import { E10E1iComponent } from '../../../../components/unity/e/e10/e10-e1i/e10-e1i';
import { E10E2qComponent } from '../../../../components/unity/e/e10/e10-e2q/e10-e2q';
import { E10E2rComponent } from '../../../../components/unity/e/e10/e10-e2r/e10-e2r';
import { E10E2iComponent } from '../../../../components/unity/e/e10/e10-e2i/e10-e2i';
import { E10E3qComponent } from '../../../../components/unity/e/e10/e10-e3q/e10-e3q';
import { E10E3rComponent } from '../../../../components/unity/e/e10/e10-e3r/e10-e3r';
import { E10E3iComponent } from '../../../../components/unity/e/e10/e10-e3i/e10-e3i';
import { E10E4qComponent } from '../../../../components/unity/e/e10/e10-e4q/e10-e4q';
import { E10E4rComponent } from '../../../../components/unity/e/e10/e10-e4r/e10-e4r';
import { E10E4iComponent } from '../../../../components/unity/e/e10/e10-e4i/e10-e4i';
import { E10E5qComponent } from '../../../../components/unity/e/e10/e10-e5q/e10-e5q';
import { E10E5rComponent } from '../../../../components/unity/e/e10/e10-e5r/e10-e5r';
import { E10E5iComponent } from '../../../../components/unity/e/e10/e10-e5i/e10-e5i';
import { E10E6qComponent } from '../../../../components/unity/e/e10/e10-e6q/e10-e6q';
import { E10E6rComponent } from '../../../../components/unity/e/e10/e10-e6r/e10-e6r';
import { E10E6iComponent } from '../../../../components/unity/e/e10/e10-e6i/e10-e6i';
import { E10E7qComponent } from '../../../../components/unity/e/e10/e10-e7q/e10-e7q';
import { E10E7rComponent } from '../../../../components/unity/e/e10/e10-e7r/e10-e7r';
import { E10E7iComponent } from '../../../../components/unity/e/e10/e10-e7i/e10-e7i';
import { E10E8qComponent } from '../../../../components/unity/e/e10/e10-e8q/e10-e8q';
import { E10E8rComponent } from '../../../../components/unity/e/e10/e10-e8r/e10-e8r';
import { E10E8iComponent } from '../../../../components/unity/e/e10/e10-e8i/e10-e8i';
import { E10E9qComponent } from '../../../../components/unity/e/e10/e10-e9q/e10-e9q';
import { E10E9rComponent } from '../../../../components/unity/e/e10/e10-e9r/e10-e9r';
import { E10E9iComponent } from '../../../../components/unity/e/e10/e10-e9i/e10-e9i';
import { E10E10qComponent } from '../../../../components/unity/e/e10/e10-e10q/e10-e10q';
import { E10E10rComponent } from '../../../../components/unity/e/e10/e10-e10r/e10-e10r';
import { E10E10iComponent } from '../../../../components/unity/e/e10/e10-e10i/e10-e10i';
import { E10E11qComponent } from '../../../../components/unity/e/e10/e10-e11q/e10-e11q';
import { E10E11rComponent } from '../../../../components/unity/e/e10/e10-e11r/e10-e11r';
import { E10E11iComponent } from '../../../../components/unity/e/e10/e10-e11i/e10-e11i';
import { E10E12qComponent } from '../../../../components/unity/e/e10/e10-e12q/e10-e12q';
import { E10E12rComponent } from '../../../../components/unity/e/e10/e10-e12r/e10-e12r';
import { E10E12iComponent } from '../../../../components/unity/e/e10/e10-e12i/e10-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE10 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e10_1q': E10E1qComponent,
        'e10_1r': E10E1rComponent,
        'e10_1i': E10E1iComponent,
        'e10_2q': E10E2qComponent,
        'e10_2r': E10E2rComponent,
        'e10_2i': E10E2iComponent,
        'e10_3q': E10E3qComponent,
        'e10_3r': E10E3rComponent,
        'e10_3i': E10E3iComponent,
        'e10_4q': E10E4qComponent,
        'e10_4r': E10E4rComponent,
        'e10_4i': E10E4iComponent,
        'e10_5q': E10E5qComponent,
        'e10_5r': E10E5rComponent,
        'e10_5i': E10E5iComponent,
        'e10_6q': E10E6qComponent,
        'e10_6r': E10E6rComponent,
        'e10_6i': E10E6iComponent,
        'e10_7q': E10E7qComponent,
        'e10_7r': E10E7rComponent,
        'e10_7i': E10E7iComponent,
        'e10_8q': E10E8qComponent,
        'e10_8r': E10E8rComponent,
        'e10_8i': E10E8iComponent,
        'e10_9q': E10E9qComponent,
        'e10_9r': E10E9rComponent,
        'e10_9i': E10E9iComponent,
        'e10_10q': E10E10qComponent,
        'e10_10r': E10E10rComponent,
        'e10_10i': E10E10iComponent,
        'e10_11q': E10E11qComponent,
        'e10_11r': E10E11rComponent,
        'e10_11i': E10E11iComponent,
        'e10_12q': E10E12qComponent,
        'e10_12r': E10E12rComponent,
        'e10_12i': E10E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    