import { Injectable, Type } from '@angular/core';
    //
    import { E5E1qComponent } from '../../../../components/unity/e/e5/e5-e1q/e5-e1q';
import { E5E1rComponent } from '../../../../components/unity/e/e5/e5-e1r/e5-e1r';
import { E5E1iComponent } from '../../../../components/unity/e/e5/e5-e1i/e5-e1i';
import { E5E2qComponent } from '../../../../components/unity/e/e5/e5-e2q/e5-e2q';
import { E5E2rComponent } from '../../../../components/unity/e/e5/e5-e2r/e5-e2r';
import { E5E2iComponent } from '../../../../components/unity/e/e5/e5-e2i/e5-e2i';
import { E5E3qComponent } from '../../../../components/unity/e/e5/e5-e3q/e5-e3q';
import { E5E3rComponent } from '../../../../components/unity/e/e5/e5-e3r/e5-e3r';
import { E5E3iComponent } from '../../../../components/unity/e/e5/e5-e3i/e5-e3i';
import { E5E4qComponent } from '../../../../components/unity/e/e5/e5-e4q/e5-e4q';
import { E5E4rComponent } from '../../../../components/unity/e/e5/e5-e4r/e5-e4r';
import { E5E4iComponent } from '../../../../components/unity/e/e5/e5-e4i/e5-e4i';
import { E5E5qComponent } from '../../../../components/unity/e/e5/e5-e5q/e5-e5q';
import { E5E5rComponent } from '../../../../components/unity/e/e5/e5-e5r/e5-e5r';
import { E5E5iComponent } from '../../../../components/unity/e/e5/e5-e5i/e5-e5i';
import { E5E6qComponent } from '../../../../components/unity/e/e5/e5-e6q/e5-e6q';
import { E5E6rComponent } from '../../../../components/unity/e/e5/e5-e6r/e5-e6r';
import { E5E6iComponent } from '../../../../components/unity/e/e5/e5-e6i/e5-e6i';
import { E5E7qComponent } from '../../../../components/unity/e/e5/e5-e7q/e5-e7q';
import { E5E7rComponent } from '../../../../components/unity/e/e5/e5-e7r/e5-e7r';
import { E5E7iComponent } from '../../../../components/unity/e/e5/e5-e7i/e5-e7i';
import { E5E8qComponent } from '../../../../components/unity/e/e5/e5-e8q/e5-e8q';
import { E5E8rComponent } from '../../../../components/unity/e/e5/e5-e8r/e5-e8r';
import { E5E8iComponent } from '../../../../components/unity/e/e5/e5-e8i/e5-e8i';
import { E5E9qComponent } from '../../../../components/unity/e/e5/e5-e9q/e5-e9q';
import { E5E9rComponent } from '../../../../components/unity/e/e5/e5-e9r/e5-e9r';
import { E5E9iComponent } from '../../../../components/unity/e/e5/e5-e9i/e5-e9i';
import { E5E10qComponent } from '../../../../components/unity/e/e5/e5-e10q/e5-e10q';
import { E5E10rComponent } from '../../../../components/unity/e/e5/e5-e10r/e5-e10r';
import { E5E10iComponent } from '../../../../components/unity/e/e5/e5-e10i/e5-e10i';
import { E5E11qComponent } from '../../../../components/unity/e/e5/e5-e11q/e5-e11q';
import { E5E11rComponent } from '../../../../components/unity/e/e5/e5-e11r/e5-e11r';
import { E5E11iComponent } from '../../../../components/unity/e/e5/e5-e11i/e5-e11i';
import { E5E12qComponent } from '../../../../components/unity/e/e5/e5-e12q/e5-e12q';
import { E5E12rComponent } from '../../../../components/unity/e/e5/e5-e12r/e5-e12r';
import { E5E12iComponent } from '../../../../components/unity/e/e5/e5-e12i/e5-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingE5 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'e5_1q': E5E1qComponent,
        'e5_1r': E5E1rComponent,
        'e5_1i': E5E1iComponent,
        'e5_2q': E5E2qComponent,
        'e5_2r': E5E2rComponent,
        'e5_2i': E5E2iComponent,
        'e5_3q': E5E3qComponent,
        'e5_3r': E5E3rComponent,
        'e5_3i': E5E3iComponent,
        'e5_4q': E5E4qComponent,
        'e5_4r': E5E4rComponent,
        'e5_4i': E5E4iComponent,
        'e5_5q': E5E5qComponent,
        'e5_5r': E5E5rComponent,
        'e5_5i': E5E5iComponent,
        'e5_6q': E5E6qComponent,
        'e5_6r': E5E6rComponent,
        'e5_6i': E5E6iComponent,
        'e5_7q': E5E7qComponent,
        'e5_7r': E5E7rComponent,
        'e5_7i': E5E7iComponent,
        'e5_8q': E5E8qComponent,
        'e5_8r': E5E8rComponent,
        'e5_8i': E5E8iComponent,
        'e5_9q': E5E9qComponent,
        'e5_9r': E5E9rComponent,
        'e5_9i': E5E9iComponent,
        'e5_10q': E5E10qComponent,
        'e5_10r': E5E10rComponent,
        'e5_10i': E5E10iComponent,
        'e5_11q': E5E11qComponent,
        'e5_11r': E5E11rComponent,
        'e5_11i': E5E11iComponent,
        'e5_12q': E5E12qComponent,
        'e5_12r': E5E12rComponent,
        'e5_12i': E5E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    