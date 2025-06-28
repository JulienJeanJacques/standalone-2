import { Injectable, Type } from '@angular/core';
    //
    import { C4E1qComponent } from '../../../../components/unity/c/c4/c4-e1q/c4-e1q';
import { C4E1rComponent } from '../../../../components/unity/c/c4/c4-e1r/c4-e1r';
import { C4E1iComponent } from '../../../../components/unity/c/c4/c4-e1i/c4-e1i';
import { C4E2qComponent } from '../../../../components/unity/c/c4/c4-e2q/c4-e2q';
import { C4E2rComponent } from '../../../../components/unity/c/c4/c4-e2r/c4-e2r';
import { C4E2iComponent } from '../../../../components/unity/c/c4/c4-e2i/c4-e2i';
import { C4E3qComponent } from '../../../../components/unity/c/c4/c4-e3q/c4-e3q';
import { C4E3rComponent } from '../../../../components/unity/c/c4/c4-e3r/c4-e3r';
import { C4E3iComponent } from '../../../../components/unity/c/c4/c4-e3i/c4-e3i';
import { C4E4qComponent } from '../../../../components/unity/c/c4/c4-e4q/c4-e4q';
import { C4E4rComponent } from '../../../../components/unity/c/c4/c4-e4r/c4-e4r';
import { C4E4iComponent } from '../../../../components/unity/c/c4/c4-e4i/c4-e4i';
import { C4E5qComponent } from '../../../../components/unity/c/c4/c4-e5q/c4-e5q';
import { C4E5rComponent } from '../../../../components/unity/c/c4/c4-e5r/c4-e5r';
import { C4E5iComponent } from '../../../../components/unity/c/c4/c4-e5i/c4-e5i';
import { C4E6qComponent } from '../../../../components/unity/c/c4/c4-e6q/c4-e6q';
import { C4E6rComponent } from '../../../../components/unity/c/c4/c4-e6r/c4-e6r';
import { C4E6iComponent } from '../../../../components/unity/c/c4/c4-e6i/c4-e6i';
import { C4E7qComponent } from '../../../../components/unity/c/c4/c4-e7q/c4-e7q';
import { C4E7rComponent } from '../../../../components/unity/c/c4/c4-e7r/c4-e7r';
import { C4E7iComponent } from '../../../../components/unity/c/c4/c4-e7i/c4-e7i';
import { C4E8qComponent } from '../../../../components/unity/c/c4/c4-e8q/c4-e8q';
import { C4E8rComponent } from '../../../../components/unity/c/c4/c4-e8r/c4-e8r';
import { C4E8iComponent } from '../../../../components/unity/c/c4/c4-e8i/c4-e8i';
import { C4E9qComponent } from '../../../../components/unity/c/c4/c4-e9q/c4-e9q';
import { C4E9rComponent } from '../../../../components/unity/c/c4/c4-e9r/c4-e9r';
import { C4E9iComponent } from '../../../../components/unity/c/c4/c4-e9i/c4-e9i';
import { C4E10qComponent } from '../../../../components/unity/c/c4/c4-e10q/c4-e10q';
import { C4E10rComponent } from '../../../../components/unity/c/c4/c4-e10r/c4-e10r';
import { C4E10iComponent } from '../../../../components/unity/c/c4/c4-e10i/c4-e10i';
import { C4E11qComponent } from '../../../../components/unity/c/c4/c4-e11q/c4-e11q';
import { C4E11rComponent } from '../../../../components/unity/c/c4/c4-e11r/c4-e11r';
import { C4E11iComponent } from '../../../../components/unity/c/c4/c4-e11i/c4-e11i';
import { C4E12qComponent } from '../../../../components/unity/c/c4/c4-e12q/c4-e12q';
import { C4E12rComponent } from '../../../../components/unity/c/c4/c4-e12r/c4-e12r';
import { C4E12iComponent } from '../../../../components/unity/c/c4/c4-e12i/c4-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC4 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c4_1q': C4E1qComponent,
        'c4_1r': C4E1rComponent,
        'c4_1i': C4E1iComponent,
        'c4_2q': C4E2qComponent,
        'c4_2r': C4E2rComponent,
        'c4_2i': C4E2iComponent,
        'c4_3q': C4E3qComponent,
        'c4_3r': C4E3rComponent,
        'c4_3i': C4E3iComponent,
        'c4_4q': C4E4qComponent,
        'c4_4r': C4E4rComponent,
        'c4_4i': C4E4iComponent,
        'c4_5q': C4E5qComponent,
        'c4_5r': C4E5rComponent,
        'c4_5i': C4E5iComponent,
        'c4_6q': C4E6qComponent,
        'c4_6r': C4E6rComponent,
        'c4_6i': C4E6iComponent,
        'c4_7q': C4E7qComponent,
        'c4_7r': C4E7rComponent,
        'c4_7i': C4E7iComponent,
        'c4_8q': C4E8qComponent,
        'c4_8r': C4E8rComponent,
        'c4_8i': C4E8iComponent,
        'c4_9q': C4E9qComponent,
        'c4_9r': C4E9rComponent,
        'c4_9i': C4E9iComponent,
        'c4_10q': C4E10qComponent,
        'c4_10r': C4E10rComponent,
        'c4_10i': C4E10iComponent,
        'c4_11q': C4E11qComponent,
        'c4_11r': C4E11rComponent,
        'c4_11i': C4E11iComponent,
        'c4_12q': C4E12qComponent,
        'c4_12r': C4E12rComponent,
        'c4_12i': C4E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    