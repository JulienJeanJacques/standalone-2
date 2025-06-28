import { Injectable, Type } from '@angular/core';
    //
    import { E9E1qComponent } from '../../../../components/unity/e/e9/e9-e1q/e9-e1q';
import { E9E1rComponent } from '../../../../components/unity/e/e9/e9-e1r/e9-e1r';
import { E9E1iComponent } from '../../../../components/unity/e/e9/e9-e1i/e9-e1i';
import { E9E2qComponent } from '../../../../components/unity/e/e9/e9-e2q/e9-e2q';
import { E9E2rComponent } from '../../../../components/unity/e/e9/e9-e2r/e9-e2r';
import { E9E2iComponent } from '../../../../components/unity/e/e9/e9-e2i/e9-e2i';
import { E9E3qComponent } from '../../../../components/unity/e/e9/e9-e3q/e9-e3q';
import { E9E3rComponent } from '../../../../components/unity/e/e9/e9-e3r/e9-e3r';
import { E9E3iComponent } from '../../../../components/unity/e/e9/e9-e3i/e9-e3i';
import { E9E4qComponent } from '../../../../components/unity/e/e9/e9-e4q/e9-e4q';
import { E9E4rComponent } from '../../../../components/unity/e/e9/e9-e4r/e9-e4r';
import { E9E4iComponent } from '../../../../components/unity/e/e9/e9-e4i/e9-e4i';
import { E9E5qComponent } from '../../../../components/unity/e/e9/e9-e5q/e9-e5q';
import { E9E5rComponent } from '../../../../components/unity/e/e9/e9-e5r/e9-e5r';
import { E9E5iComponent } from '../../../../components/unity/e/e9/e9-e5i/e9-e5i';
import { E9E6qComponent } from '../../../../components/unity/e/e9/e9-e6q/e9-e6q';
import { E9E6rComponent } from '../../../../components/unity/e/e9/e9-e6r/e9-e6r';
import { E9E6iComponent } from '../../../../components/unity/e/e9/e9-e6i/e9-e6i';
import { E9E7qComponent } from '../../../../components/unity/e/e9/e9-e7q/e9-e7q';
import { E9E7rComponent } from '../../../../components/unity/e/e9/e9-e7r/e9-e7r';
import { E9E7iComponent } from '../../../../components/unity/e/e9/e9-e7i/e9-e7i';
import { E9E8qComponent } from '../../../../components/unity/e/e9/e9-e8q/e9-e8q';
import { E9E8rComponent } from '../../../../components/unity/e/e9/e9-e8r/e9-e8r';
import { E9E8iComponent } from '../../../../components/unity/e/e9/e9-e8i/e9-e8i';
import { E9E9qComponent } from '../../../../components/unity/e/e9/e9-e9q/e9-e9q';
import { E9E9rComponent } from '../../../../components/unity/e/e9/e9-e9r/e9-e9r';
import { E9E9iComponent } from '../../../../components/unity/e/e9/e9-e9i/e9-e9i';
import { E9E10qComponent } from '../../../../components/unity/e/e9/e9-e10q/e9-e10q';
import { E9E10rComponent } from '../../../../components/unity/e/e9/e9-e10r/e9-e10r';
import { E9E10iComponent } from '../../../../components/unity/e/e9/e9-e10i/e9-e10i';
import { E9E11qComponent } from '../../../../components/unity/e/e9/e9-e11q/e9-e11q';
import { E9E11rComponent } from '../../../../components/unity/e/e9/e9-e11r/e9-e11r';
import { E9E11iComponent } from '../../../../components/unity/e/e9/e9-e11i/e9-e11i';
import { E9E12qComponent } from '../../../../components/unity/e/e9/e9-e12q/e9-e12q';
import { E9E12rComponent } from '../../../../components/unity/e/e9/e9-e12r/e9-e12r';
import { E9E12iComponent } from '../../../../components/unity/e/e9/e9-e12i/e9-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE9 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e9_1q': E9E1qComponent,
        'e9_1r': E9E1rComponent,
        'e9_1i': E9E1iComponent,
        'e9_2q': E9E2qComponent,
        'e9_2r': E9E2rComponent,
        'e9_2i': E9E2iComponent,
        'e9_3q': E9E3qComponent,
        'e9_3r': E9E3rComponent,
        'e9_3i': E9E3iComponent,
        'e9_4q': E9E4qComponent,
        'e9_4r': E9E4rComponent,
        'e9_4i': E9E4iComponent,
        'e9_5q': E9E5qComponent,
        'e9_5r': E9E5rComponent,
        'e9_5i': E9E5iComponent,
        'e9_6q': E9E6qComponent,
        'e9_6r': E9E6rComponent,
        'e9_6i': E9E6iComponent,
        'e9_7q': E9E7qComponent,
        'e9_7r': E9E7rComponent,
        'e9_7i': E9E7iComponent,
        'e9_8q': E9E8qComponent,
        'e9_8r': E9E8rComponent,
        'e9_8i': E9E8iComponent,
        'e9_9q': E9E9qComponent,
        'e9_9r': E9E9rComponent,
        'e9_9i': E9E9iComponent,
        'e9_10q': E9E10qComponent,
        'e9_10r': E9E10rComponent,
        'e9_10i': E9E10iComponent,
        'e9_11q': E9E11qComponent,
        'e9_11r': E9E11rComponent,
        'e9_11i': E9E11iComponent,
        'e9_12q': E9E12qComponent,
        'e9_12r': E9E12rComponent,
        'e9_12i': E9E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    