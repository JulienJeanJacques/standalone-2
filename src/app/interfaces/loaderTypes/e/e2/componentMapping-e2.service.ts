import { Injectable, Type } from '@angular/core';
    //
    import { E2E1qComponent } from '../../../../components/unity/e/e2/e2-e1q/e2-e1q';
import { E2E1rComponent } from '../../../../components/unity/e/e2/e2-e1r/e2-e1r';
import { E2E1iComponent } from '../../../../components/unity/e/e2/e2-e1i/e2-e1i';
import { E2E2qComponent } from '../../../../components/unity/e/e2/e2-e2q/e2-e2q';
import { E2E2rComponent } from '../../../../components/unity/e/e2/e2-e2r/e2-e2r';
import { E2E2iComponent } from '../../../../components/unity/e/e2/e2-e2i/e2-e2i';
import { E2E3qComponent } from '../../../../components/unity/e/e2/e2-e3q/e2-e3q';
import { E2E3rComponent } from '../../../../components/unity/e/e2/e2-e3r/e2-e3r';
import { E2E3iComponent } from '../../../../components/unity/e/e2/e2-e3i/e2-e3i';
import { E2E4qComponent } from '../../../../components/unity/e/e2/e2-e4q/e2-e4q';
import { E2E4rComponent } from '../../../../components/unity/e/e2/e2-e4r/e2-e4r';
import { E2E4iComponent } from '../../../../components/unity/e/e2/e2-e4i/e2-e4i';
import { E2E5qComponent } from '../../../../components/unity/e/e2/e2-e5q/e2-e5q';
import { E2E5rComponent } from '../../../../components/unity/e/e2/e2-e5r/e2-e5r';
import { E2E5iComponent } from '../../../../components/unity/e/e2/e2-e5i/e2-e5i';
import { E2E6qComponent } from '../../../../components/unity/e/e2/e2-e6q/e2-e6q';
import { E2E6rComponent } from '../../../../components/unity/e/e2/e2-e6r/e2-e6r';
import { E2E6iComponent } from '../../../../components/unity/e/e2/e2-e6i/e2-e6i';
import { E2E7qComponent } from '../../../../components/unity/e/e2/e2-e7q/e2-e7q';
import { E2E7rComponent } from '../../../../components/unity/e/e2/e2-e7r/e2-e7r';
import { E2E7iComponent } from '../../../../components/unity/e/e2/e2-e7i/e2-e7i';
import { E2E8qComponent } from '../../../../components/unity/e/e2/e2-e8q/e2-e8q';
import { E2E8rComponent } from '../../../../components/unity/e/e2/e2-e8r/e2-e8r';
import { E2E8iComponent } from '../../../../components/unity/e/e2/e2-e8i/e2-e8i';
import { E2E9qComponent } from '../../../../components/unity/e/e2/e2-e9q/e2-e9q';
import { E2E9rComponent } from '../../../../components/unity/e/e2/e2-e9r/e2-e9r';
import { E2E9iComponent } from '../../../../components/unity/e/e2/e2-e9i/e2-e9i';
import { E2E10qComponent } from '../../../../components/unity/e/e2/e2-e10q/e2-e10q';
import { E2E10rComponent } from '../../../../components/unity/e/e2/e2-e10r/e2-e10r';
import { E2E10iComponent } from '../../../../components/unity/e/e2/e2-e10i/e2-e10i';
import { E2E11qComponent } from '../../../../components/unity/e/e2/e2-e11q/e2-e11q';
import { E2E11rComponent } from '../../../../components/unity/e/e2/e2-e11r/e2-e11r';
import { E2E11iComponent } from '../../../../components/unity/e/e2/e2-e11i/e2-e11i';
import { E2E12qComponent } from '../../../../components/unity/e/e2/e2-e12q/e2-e12q';
import { E2E12rComponent } from '../../../../components/unity/e/e2/e2-e12r/e2-e12r';
import { E2E12iComponent } from '../../../../components/unity/e/e2/e2-e12i/e2-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE2 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e2_1q': E2E1qComponent,
        'e2_1r': E2E1rComponent,
        'e2_1i': E2E1iComponent,
        'e2_2q': E2E2qComponent,
        'e2_2r': E2E2rComponent,
        'e2_2i': E2E2iComponent,
        'e2_3q': E2E3qComponent,
        'e2_3r': E2E3rComponent,
        'e2_3i': E2E3iComponent,
        'e2_4q': E2E4qComponent,
        'e2_4r': E2E4rComponent,
        'e2_4i': E2E4iComponent,
        'e2_5q': E2E5qComponent,
        'e2_5r': E2E5rComponent,
        'e2_5i': E2E5iComponent,
        'e2_6q': E2E6qComponent,
        'e2_6r': E2E6rComponent,
        'e2_6i': E2E6iComponent,
        'e2_7q': E2E7qComponent,
        'e2_7r': E2E7rComponent,
        'e2_7i': E2E7iComponent,
        'e2_8q': E2E8qComponent,
        'e2_8r': E2E8rComponent,
        'e2_8i': E2E8iComponent,
        'e2_9q': E2E9qComponent,
        'e2_9r': E2E9rComponent,
        'e2_9i': E2E9iComponent,
        'e2_10q': E2E10qComponent,
        'e2_10r': E2E10rComponent,
        'e2_10i': E2E10iComponent,
        'e2_11q': E2E11qComponent,
        'e2_11r': E2E11rComponent,
        'e2_11i': E2E11iComponent,
        'e2_12q': E2E12qComponent,
        'e2_12r': E2E12rComponent,
        'e2_12i': E2E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    