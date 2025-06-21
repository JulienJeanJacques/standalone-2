import { Injectable, Type } from '@angular/core';
    //
    import { E11E1qComponent } from '../../../../components/unity/e/e11/e11-e1q/e11-e1q';
import { E11E1rComponent } from '../../../../components/unity/e/e11/e11-e1r/e11-e1r';
import { E11E1iComponent } from '../../../../components/unity/e/e11/e11-e1i/e11-e1i';
import { E11E2qComponent } from '../../../../components/unity/e/e11/e11-e2q/e11-e2q';
import { E11E2rComponent } from '../../../../components/unity/e/e11/e11-e2r/e11-e2r';
import { E11E2iComponent } from '../../../../components/unity/e/e11/e11-e2i/e11-e2i';
import { E11E3qComponent } from '../../../../components/unity/e/e11/e11-e3q/e11-e3q';
import { E11E3rComponent } from '../../../../components/unity/e/e11/e11-e3r/e11-e3r';
import { E11E3iComponent } from '../../../../components/unity/e/e11/e11-e3i/e11-e3i';
import { E11E4qComponent } from '../../../../components/unity/e/e11/e11-e4q/e11-e4q';
import { E11E4rComponent } from '../../../../components/unity/e/e11/e11-e4r/e11-e4r';
import { E11E4iComponent } from '../../../../components/unity/e/e11/e11-e4i/e11-e4i';
import { E11E5qComponent } from '../../../../components/unity/e/e11/e11-e5q/e11-e5q';
import { E11E5rComponent } from '../../../../components/unity/e/e11/e11-e5r/e11-e5r';
import { E11E5iComponent } from '../../../../components/unity/e/e11/e11-e5i/e11-e5i';
import { E11E6qComponent } from '../../../../components/unity/e/e11/e11-e6q/e11-e6q';
import { E11E6rComponent } from '../../../../components/unity/e/e11/e11-e6r/e11-e6r';
import { E11E6iComponent } from '../../../../components/unity/e/e11/e11-e6i/e11-e6i';
import { E11E7qComponent } from '../../../../components/unity/e/e11/e11-e7q/e11-e7q';
import { E11E7rComponent } from '../../../../components/unity/e/e11/e11-e7r/e11-e7r';
import { E11E7iComponent } from '../../../../components/unity/e/e11/e11-e7i/e11-e7i';
import { E11E8qComponent } from '../../../../components/unity/e/e11/e11-e8q/e11-e8q';
import { E11E8rComponent } from '../../../../components/unity/e/e11/e11-e8r/e11-e8r';
import { E11E8iComponent } from '../../../../components/unity/e/e11/e11-e8i/e11-e8i';
import { E11E9qComponent } from '../../../../components/unity/e/e11/e11-e9q/e11-e9q';
import { E11E9rComponent } from '../../../../components/unity/e/e11/e11-e9r/e11-e9r';
import { E11E9iComponent } from '../../../../components/unity/e/e11/e11-e9i/e11-e9i';
import { E11E10qComponent } from '../../../../components/unity/e/e11/e11-e10q/e11-e10q';
import { E11E10rComponent } from '../../../../components/unity/e/e11/e11-e10r/e11-e10r';
import { E11E10iComponent } from '../../../../components/unity/e/e11/e11-e10i/e11-e10i';
import { E11E11qComponent } from '../../../../components/unity/e/e11/e11-e11q/e11-e11q';
import { E11E11rComponent } from '../../../../components/unity/e/e11/e11-e11r/e11-e11r';
import { E11E11iComponent } from '../../../../components/unity/e/e11/e11-e11i/e11-e11i';
import { E11E12qComponent } from '../../../../components/unity/e/e11/e11-e12q/e11-e12q';
import { E11E12rComponent } from '../../../../components/unity/e/e11/e11-e12r/e11-e12r';
import { E11E12iComponent } from '../../../../components/unity/e/e11/e11-e12i/e11-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE11 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e11_1q': E11E1qComponent,
        'e11_1r': E11E1rComponent,
        'e11_1i': E11E1iComponent,
        'e11_2q': E11E2qComponent,
        'e11_2r': E11E2rComponent,
        'e11_2i': E11E2iComponent,
        'e11_3q': E11E3qComponent,
        'e11_3r': E11E3rComponent,
        'e11_3i': E11E3iComponent,
        'e11_4q': E11E4qComponent,
        'e11_4r': E11E4rComponent,
        'e11_4i': E11E4iComponent,
        'e11_5q': E11E5qComponent,
        'e11_5r': E11E5rComponent,
        'e11_5i': E11E5iComponent,
        'e11_6q': E11E6qComponent,
        'e11_6r': E11E6rComponent,
        'e11_6i': E11E6iComponent,
        'e11_7q': E11E7qComponent,
        'e11_7r': E11E7rComponent,
        'e11_7i': E11E7iComponent,
        'e11_8q': E11E8qComponent,
        'e11_8r': E11E8rComponent,
        'e11_8i': E11E8iComponent,
        'e11_9q': E11E9qComponent,
        'e11_9r': E11E9rComponent,
        'e11_9i': E11E9iComponent,
        'e11_10q': E11E10qComponent,
        'e11_10r': E11E10rComponent,
        'e11_10i': E11E10iComponent,
        'e11_11q': E11E11qComponent,
        'e11_11r': E11E11rComponent,
        'e11_11i': E11E11iComponent,
        'e11_12q': E11E12qComponent,
        'e11_12r': E11E12rComponent,
        'e11_12i': E11E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    