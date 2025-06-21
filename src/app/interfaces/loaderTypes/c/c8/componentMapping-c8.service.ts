import { Injectable, Type } from '@angular/core';
    //
    import { C8E1qComponent } from '../../../../components/unity/c/c8/c8-e1q/c8-e1q';
import { C8E1rComponent } from '../../../../components/unity/c/c8/c8-e1r/c8-e1r';
import { C8E1iComponent } from '../../../../components/unity/c/c8/c8-e1i/c8-e1i';
import { C8E2qComponent } from '../../../../components/unity/c/c8/c8-e2q/c8-e2q';
import { C8E2rComponent } from '../../../../components/unity/c/c8/c8-e2r/c8-e2r';
import { C8E2iComponent } from '../../../../components/unity/c/c8/c8-e2i/c8-e2i';
import { C8E3qComponent } from '../../../../components/unity/c/c8/c8-e3q/c8-e3q';
import { C8E3rComponent } from '../../../../components/unity/c/c8/c8-e3r/c8-e3r';
import { C8E3iComponent } from '../../../../components/unity/c/c8/c8-e3i/c8-e3i';
import { C8E4qComponent } from '../../../../components/unity/c/c8/c8-e4q/c8-e4q';
import { C8E4rComponent } from '../../../../components/unity/c/c8/c8-e4r/c8-e4r';
import { C8E4iComponent } from '../../../../components/unity/c/c8/c8-e4i/c8-e4i';
import { C8E5qComponent } from '../../../../components/unity/c/c8/c8-e5q/c8-e5q';
import { C8E5rComponent } from '../../../../components/unity/c/c8/c8-e5r/c8-e5r';
import { C8E5iComponent } from '../../../../components/unity/c/c8/c8-e5i/c8-e5i';
import { C8E6qComponent } from '../../../../components/unity/c/c8/c8-e6q/c8-e6q';
import { C8E6rComponent } from '../../../../components/unity/c/c8/c8-e6r/c8-e6r';
import { C8E6iComponent } from '../../../../components/unity/c/c8/c8-e6i/c8-e6i';
import { C8E7qComponent } from '../../../../components/unity/c/c8/c8-e7q/c8-e7q';
import { C8E7rComponent } from '../../../../components/unity/c/c8/c8-e7r/c8-e7r';
import { C8E7iComponent } from '../../../../components/unity/c/c8/c8-e7i/c8-e7i';
import { C8E8qComponent } from '../../../../components/unity/c/c8/c8-e8q/c8-e8q';
import { C8E8rComponent } from '../../../../components/unity/c/c8/c8-e8r/c8-e8r';
import { C8E8iComponent } from '../../../../components/unity/c/c8/c8-e8i/c8-e8i';
import { C8E9qComponent } from '../../../../components/unity/c/c8/c8-e9q/c8-e9q';
import { C8E9rComponent } from '../../../../components/unity/c/c8/c8-e9r/c8-e9r';
import { C8E9iComponent } from '../../../../components/unity/c/c8/c8-e9i/c8-e9i';
import { C8E10qComponent } from '../../../../components/unity/c/c8/c8-e10q/c8-e10q';
import { C8E10rComponent } from '../../../../components/unity/c/c8/c8-e10r/c8-e10r';
import { C8E10iComponent } from '../../../../components/unity/c/c8/c8-e10i/c8-e10i';
import { C8E11qComponent } from '../../../../components/unity/c/c8/c8-e11q/c8-e11q';
import { C8E11rComponent } from '../../../../components/unity/c/c8/c8-e11r/c8-e11r';
import { C8E11iComponent } from '../../../../components/unity/c/c8/c8-e11i/c8-e11i';
import { C8E12qComponent } from '../../../../components/unity/c/c8/c8-e12q/c8-e12q';
import { C8E12rComponent } from '../../../../components/unity/c/c8/c8-e12r/c8-e12r';
import { C8E12iComponent } from '../../../../components/unity/c/c8/c8-e12i/c8-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC8 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c8_1q': C8E1qComponent,
        'c8_1r': C8E1rComponent,
        'c8_1i': C8E1iComponent,
        'c8_2q': C8E2qComponent,
        'c8_2r': C8E2rComponent,
        'c8_2i': C8E2iComponent,
        'c8_3q': C8E3qComponent,
        'c8_3r': C8E3rComponent,
        'c8_3i': C8E3iComponent,
        'c8_4q': C8E4qComponent,
        'c8_4r': C8E4rComponent,
        'c8_4i': C8E4iComponent,
        'c8_5q': C8E5qComponent,
        'c8_5r': C8E5rComponent,
        'c8_5i': C8E5iComponent,
        'c8_6q': C8E6qComponent,
        'c8_6r': C8E6rComponent,
        'c8_6i': C8E6iComponent,
        'c8_7q': C8E7qComponent,
        'c8_7r': C8E7rComponent,
        'c8_7i': C8E7iComponent,
        'c8_8q': C8E8qComponent,
        'c8_8r': C8E8rComponent,
        'c8_8i': C8E8iComponent,
        'c8_9q': C8E9qComponent,
        'c8_9r': C8E9rComponent,
        'c8_9i': C8E9iComponent,
        'c8_10q': C8E10qComponent,
        'c8_10r': C8E10rComponent,
        'c8_10i': C8E10iComponent,
        'c8_11q': C8E11qComponent,
        'c8_11r': C8E11rComponent,
        'c8_11i': C8E11iComponent,
        'c8_12q': C8E12qComponent,
        'c8_12r': C8E12rComponent,
        'c8_12i': C8E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    