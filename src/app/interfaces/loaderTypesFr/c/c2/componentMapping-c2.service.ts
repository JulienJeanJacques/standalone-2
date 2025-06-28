import { Injectable, Type } from '@angular/core';
    //
    import { C2E1qComponent } from '../../../../components/unity/c/c2/c2-e1q/c2-e1q';
import { C2E1rComponent } from '../../../../components/unity/c/c2/c2-e1r/c2-e1r';
import { C2E1iComponent } from '../../../../components/unity/c/c2/c2-e1i/c2-e1i';
import { C2E2qComponent } from '../../../../components/unity/c/c2/c2-e2q/c2-e2q';
import { C2E2rComponent } from '../../../../components/unity/c/c2/c2-e2r/c2-e2r';
import { C2E2iComponent } from '../../../../components/unity/c/c2/c2-e2i/c2-e2i';
import { C2E3qComponent } from '../../../../components/unity/c/c2/c2-e3q/c2-e3q';
import { C2E3rComponent } from '../../../../components/unity/c/c2/c2-e3r/c2-e3r';
import { C2E3iComponent } from '../../../../components/unity/c/c2/c2-e3i/c2-e3i';
import { C2E4qComponent } from '../../../../components/unity/c/c2/c2-e4q/c2-e4q';
import { C2E4rComponent } from '../../../../components/unity/c/c2/c2-e4r/c2-e4r';
import { C2E4iComponent } from '../../../../components/unity/c/c2/c2-e4i/c2-e4i';
import { C2E5qComponent } from '../../../../components/unity/c/c2/c2-e5q/c2-e5q';
import { C2E5rComponent } from '../../../../components/unity/c/c2/c2-e5r/c2-e5r';
import { C2E5iComponent } from '../../../../components/unity/c/c2/c2-e5i/c2-e5i';
import { C2E6qComponent } from '../../../../components/unity/c/c2/c2-e6q/c2-e6q';
import { C2E6rComponent } from '../../../../components/unity/c/c2/c2-e6r/c2-e6r';
import { C2E6iComponent } from '../../../../components/unity/c/c2/c2-e6i/c2-e6i';
import { C2E7qComponent } from '../../../../components/unity/c/c2/c2-e7q/c2-e7q';
import { C2E7rComponent } from '../../../../components/unity/c/c2/c2-e7r/c2-e7r';
import { C2E7iComponent } from '../../../../components/unity/c/c2/c2-e7i/c2-e7i';
import { C2E8qComponent } from '../../../../components/unity/c/c2/c2-e8q/c2-e8q';
import { C2E8rComponent } from '../../../../components/unity/c/c2/c2-e8r/c2-e8r';
import { C2E8iComponent } from '../../../../components/unity/c/c2/c2-e8i/c2-e8i';
import { C2E9qComponent } from '../../../../components/unity/c/c2/c2-e9q/c2-e9q';
import { C2E9rComponent } from '../../../../components/unity/c/c2/c2-e9r/c2-e9r';
import { C2E9iComponent } from '../../../../components/unity/c/c2/c2-e9i/c2-e9i';
import { C2E10qComponent } from '../../../../components/unity/c/c2/c2-e10q/c2-e10q';
import { C2E10rComponent } from '../../../../components/unity/c/c2/c2-e10r/c2-e10r';
import { C2E10iComponent } from '../../../../components/unity/c/c2/c2-e10i/c2-e10i';
import { C2E11qComponent } from '../../../../components/unity/c/c2/c2-e11q/c2-e11q';
import { C2E11rComponent } from '../../../../components/unity/c/c2/c2-e11r/c2-e11r';
import { C2E11iComponent } from '../../../../components/unity/c/c2/c2-e11i/c2-e11i';
import { C2E12qComponent } from '../../../../components/unity/c/c2/c2-e12q/c2-e12q';
import { C2E12rComponent } from '../../../../components/unity/c/c2/c2-e12r/c2-e12r';
import { C2E12iComponent } from '../../../../components/unity/c/c2/c2-e12i/c2-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC2 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c2_1q': C2E1qComponent,
        'c2_1r': C2E1rComponent,
        'c2_1i': C2E1iComponent,
        'c2_2q': C2E2qComponent,
        'c2_2r': C2E2rComponent,
        'c2_2i': C2E2iComponent,
        'c2_3q': C2E3qComponent,
        'c2_3r': C2E3rComponent,
        'c2_3i': C2E3iComponent,
        'c2_4q': C2E4qComponent,
        'c2_4r': C2E4rComponent,
        'c2_4i': C2E4iComponent,
        'c2_5q': C2E5qComponent,
        'c2_5r': C2E5rComponent,
        'c2_5i': C2E5iComponent,
        'c2_6q': C2E6qComponent,
        'c2_6r': C2E6rComponent,
        'c2_6i': C2E6iComponent,
        'c2_7q': C2E7qComponent,
        'c2_7r': C2E7rComponent,
        'c2_7i': C2E7iComponent,
        'c2_8q': C2E8qComponent,
        'c2_8r': C2E8rComponent,
        'c2_8i': C2E8iComponent,
        'c2_9q': C2E9qComponent,
        'c2_9r': C2E9rComponent,
        'c2_9i': C2E9iComponent,
        'c2_10q': C2E10qComponent,
        'c2_10r': C2E10rComponent,
        'c2_10i': C2E10iComponent,
        'c2_11q': C2E11qComponent,
        'c2_11r': C2E11rComponent,
        'c2_11i': C2E11iComponent,
        'c2_12q': C2E12qComponent,
        'c2_12r': C2E12rComponent,
        'c2_12i': C2E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    