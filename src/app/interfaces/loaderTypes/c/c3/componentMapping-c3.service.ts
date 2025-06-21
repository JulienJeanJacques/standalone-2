import { Injectable, Type } from '@angular/core';
    //
    import { C3E1qComponent } from '../../../../components/unity/c/c3/c3-e1q/c3-e1q';
import { C3E1rComponent } from '../../../../components/unity/c/c3/c3-e1r/c3-e1r';
import { C3E1iComponent } from '../../../../components/unity/c/c3/c3-e1i/c3-e1i';
import { C3E2qComponent } from '../../../../components/unity/c/c3/c3-e2q/c3-e2q';
import { C3E2rComponent } from '../../../../components/unity/c/c3/c3-e2r/c3-e2r';
import { C3E2iComponent } from '../../../../components/unity/c/c3/c3-e2i/c3-e2i';
import { C3E3qComponent } from '../../../../components/unity/c/c3/c3-e3q/c3-e3q';
import { C3E3rComponent } from '../../../../components/unity/c/c3/c3-e3r/c3-e3r';
import { C3E3iComponent } from '../../../../components/unity/c/c3/c3-e3i/c3-e3i';
import { C3E4qComponent } from '../../../../components/unity/c/c3/c3-e4q/c3-e4q';
import { C3E4rComponent } from '../../../../components/unity/c/c3/c3-e4r/c3-e4r';
import { C3E4iComponent } from '../../../../components/unity/c/c3/c3-e4i/c3-e4i';
import { C3E5qComponent } from '../../../../components/unity/c/c3/c3-e5q/c3-e5q';
import { C3E5rComponent } from '../../../../components/unity/c/c3/c3-e5r/c3-e5r';
import { C3E5iComponent } from '../../../../components/unity/c/c3/c3-e5i/c3-e5i';
import { C3E6qComponent } from '../../../../components/unity/c/c3/c3-e6q/c3-e6q';
import { C3E6rComponent } from '../../../../components/unity/c/c3/c3-e6r/c3-e6r';
import { C3E6iComponent } from '../../../../components/unity/c/c3/c3-e6i/c3-e6i';
import { C3E7qComponent } from '../../../../components/unity/c/c3/c3-e7q/c3-e7q';
import { C3E7rComponent } from '../../../../components/unity/c/c3/c3-e7r/c3-e7r';
import { C3E7iComponent } from '../../../../components/unity/c/c3/c3-e7i/c3-e7i';
import { C3E8qComponent } from '../../../../components/unity/c/c3/c3-e8q/c3-e8q';
import { C3E8rComponent } from '../../../../components/unity/c/c3/c3-e8r/c3-e8r';
import { C3E8iComponent } from '../../../../components/unity/c/c3/c3-e8i/c3-e8i';
import { C3E9qComponent } from '../../../../components/unity/c/c3/c3-e9q/c3-e9q';
import { C3E9rComponent } from '../../../../components/unity/c/c3/c3-e9r/c3-e9r';
import { C3E9iComponent } from '../../../../components/unity/c/c3/c3-e9i/c3-e9i';
import { C3E10qComponent } from '../../../../components/unity/c/c3/c3-e10q/c3-e10q';
import { C3E10rComponent } from '../../../../components/unity/c/c3/c3-e10r/c3-e10r';
import { C3E10iComponent } from '../../../../components/unity/c/c3/c3-e10i/c3-e10i';
import { C3E11qComponent } from '../../../../components/unity/c/c3/c3-e11q/c3-e11q';
import { C3E11rComponent } from '../../../../components/unity/c/c3/c3-e11r/c3-e11r';
import { C3E11iComponent } from '../../../../components/unity/c/c3/c3-e11i/c3-e11i';
import { C3E12qComponent } from '../../../../components/unity/c/c3/c3-e12q/c3-e12q';
import { C3E12rComponent } from '../../../../components/unity/c/c3/c3-e12r/c3-e12r';
import { C3E12iComponent } from '../../../../components/unity/c/c3/c3-e12i/c3-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC3 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c3_1q': C3E1qComponent,
        'c3_1r': C3E1rComponent,
        'c3_1i': C3E1iComponent,
        'c3_2q': C3E2qComponent,
        'c3_2r': C3E2rComponent,
        'c3_2i': C3E2iComponent,
        'c3_3q': C3E3qComponent,
        'c3_3r': C3E3rComponent,
        'c3_3i': C3E3iComponent,
        'c3_4q': C3E4qComponent,
        'c3_4r': C3E4rComponent,
        'c3_4i': C3E4iComponent,
        'c3_5q': C3E5qComponent,
        'c3_5r': C3E5rComponent,
        'c3_5i': C3E5iComponent,
        'c3_6q': C3E6qComponent,
        'c3_6r': C3E6rComponent,
        'c3_6i': C3E6iComponent,
        'c3_7q': C3E7qComponent,
        'c3_7r': C3E7rComponent,
        'c3_7i': C3E7iComponent,
        'c3_8q': C3E8qComponent,
        'c3_8r': C3E8rComponent,
        'c3_8i': C3E8iComponent,
        'c3_9q': C3E9qComponent,
        'c3_9r': C3E9rComponent,
        'c3_9i': C3E9iComponent,
        'c3_10q': C3E10qComponent,
        'c3_10r': C3E10rComponent,
        'c3_10i': C3E10iComponent,
        'c3_11q': C3E11qComponent,
        'c3_11r': C3E11rComponent,
        'c3_11i': C3E11iComponent,
        'c3_12q': C3E12qComponent,
        'c3_12r': C3E12rComponent,
        'c3_12i': C3E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    