import { Injectable, Type } from '@angular/core';
    //
    import { E6E1qComponent } from '../../../../components/unity/e/e6/e6-e1q/e6-e1q';
import { E6E1rComponent } from '../../../../components/unity/e/e6/e6-e1r/e6-e1r';
import { E6E1iComponent } from '../../../../components/unity/e/e6/e6-e1i/e6-e1i';
import { E6E2qComponent } from '../../../../components/unity/e/e6/e6-e2q/e6-e2q';
import { E6E2rComponent } from '../../../../components/unity/e/e6/e6-e2r/e6-e2r';
import { E6E2iComponent } from '../../../../components/unity/e/e6/e6-e2i/e6-e2i';
import { E6E3qComponent } from '../../../../components/unity/e/e6/e6-e3q/e6-e3q';
import { E6E3rComponent } from '../../../../components/unity/e/e6/e6-e3r/e6-e3r';
import { E6E3iComponent } from '../../../../components/unity/e/e6/e6-e3i/e6-e3i';
import { E6E4qComponent } from '../../../../components/unity/e/e6/e6-e4q/e6-e4q';
import { E6E4rComponent } from '../../../../components/unity/e/e6/e6-e4r/e6-e4r';
import { E6E4iComponent } from '../../../../components/unity/e/e6/e6-e4i/e6-e4i';
import { E6E5qComponent } from '../../../../components/unity/e/e6/e6-e5q/e6-e5q';
import { E6E5rComponent } from '../../../../components/unity/e/e6/e6-e5r/e6-e5r';
import { E6E5iComponent } from '../../../../components/unity/e/e6/e6-e5i/e6-e5i';
import { E6E6qComponent } from '../../../../components/unity/e/e6/e6-e6q/e6-e6q';
import { E6E6rComponent } from '../../../../components/unity/e/e6/e6-e6r/e6-e6r';
import { E6E6iComponent } from '../../../../components/unity/e/e6/e6-e6i/e6-e6i';
import { E6E7qComponent } from '../../../../components/unity/e/e6/e6-e7q/e6-e7q';
import { E6E7rComponent } from '../../../../components/unity/e/e6/e6-e7r/e6-e7r';
import { E6E7iComponent } from '../../../../components/unity/e/e6/e6-e7i/e6-e7i';
import { E6E8qComponent } from '../../../../components/unity/e/e6/e6-e8q/e6-e8q';
import { E6E8rComponent } from '../../../../components/unity/e/e6/e6-e8r/e6-e8r';
import { E6E8iComponent } from '../../../../components/unity/e/e6/e6-e8i/e6-e8i';
import { E6E9qComponent } from '../../../../components/unity/e/e6/e6-e9q/e6-e9q';
import { E6E9rComponent } from '../../../../components/unity/e/e6/e6-e9r/e6-e9r';
import { E6E9iComponent } from '../../../../components/unity/e/e6/e6-e9i/e6-e9i';
import { E6E10qComponent } from '../../../../components/unity/e/e6/e6-e10q/e6-e10q';
import { E6E10rComponent } from '../../../../components/unity/e/e6/e6-e10r/e6-e10r';
import { E6E10iComponent } from '../../../../components/unity/e/e6/e6-e10i/e6-e10i';
import { E6E11qComponent } from '../../../../components/unity/e/e6/e6-e11q/e6-e11q';
import { E6E11rComponent } from '../../../../components/unity/e/e6/e6-e11r/e6-e11r';
import { E6E11iComponent } from '../../../../components/unity/e/e6/e6-e11i/e6-e11i';
import { E6E12qComponent } from '../../../../components/unity/e/e6/e6-e12q/e6-e12q';
import { E6E12rComponent } from '../../../../components/unity/e/e6/e6-e12r/e6-e12r';
import { E6E12iComponent } from '../../../../components/unity/e/e6/e6-e12i/e6-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE6 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e6_1q': E6E1qComponent,
        'e6_1r': E6E1rComponent,
        'e6_1i': E6E1iComponent,
        'e6_2q': E6E2qComponent,
        'e6_2r': E6E2rComponent,
        'e6_2i': E6E2iComponent,
        'e6_3q': E6E3qComponent,
        'e6_3r': E6E3rComponent,
        'e6_3i': E6E3iComponent,
        'e6_4q': E6E4qComponent,
        'e6_4r': E6E4rComponent,
        'e6_4i': E6E4iComponent,
        'e6_5q': E6E5qComponent,
        'e6_5r': E6E5rComponent,
        'e6_5i': E6E5iComponent,
        'e6_6q': E6E6qComponent,
        'e6_6r': E6E6rComponent,
        'e6_6i': E6E6iComponent,
        'e6_7q': E6E7qComponent,
        'e6_7r': E6E7rComponent,
        'e6_7i': E6E7iComponent,
        'e6_8q': E6E8qComponent,
        'e6_8r': E6E8rComponent,
        'e6_8i': E6E8iComponent,
        'e6_9q': E6E9qComponent,
        'e6_9r': E6E9rComponent,
        'e6_9i': E6E9iComponent,
        'e6_10q': E6E10qComponent,
        'e6_10r': E6E10rComponent,
        'e6_10i': E6E10iComponent,
        'e6_11q': E6E11qComponent,
        'e6_11r': E6E11rComponent,
        'e6_11i': E6E11iComponent,
        'e6_12q': E6E12qComponent,
        'e6_12r': E6E12rComponent,
        'e6_12i': E6E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    