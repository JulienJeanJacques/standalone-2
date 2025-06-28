import { Injectable, Type } from '@angular/core';
    //
    import { C10E1qComponent } from '../../../../components/unity/c/c10/c10-e1q/c10-e1q';
import { C10E1rComponent } from '../../../../components/unity/c/c10/c10-e1r/c10-e1r';
import { C10E1iComponent } from '../../../../components/unity/c/c10/c10-e1i/c10-e1i';
import { C10E2qComponent } from '../../../../components/unity/c/c10/c10-e2q/c10-e2q';
import { C10E2rComponent } from '../../../../components/unity/c/c10/c10-e2r/c10-e2r';
import { C10E2iComponent } from '../../../../components/unity/c/c10/c10-e2i/c10-e2i';
import { C10E3qComponent } from '../../../../components/unity/c/c10/c10-e3q/c10-e3q';
import { C10E3rComponent } from '../../../../components/unity/c/c10/c10-e3r/c10-e3r';
import { C10E3iComponent } from '../../../../components/unity/c/c10/c10-e3i/c10-e3i';
import { C10E4qComponent } from '../../../../components/unity/c/c10/c10-e4q/c10-e4q';
import { C10E4rComponent } from '../../../../components/unity/c/c10/c10-e4r/c10-e4r';
import { C10E4iComponent } from '../../../../components/unity/c/c10/c10-e4i/c10-e4i';
import { C10E5qComponent } from '../../../../components/unity/c/c10/c10-e5q/c10-e5q';
import { C10E5rComponent } from '../../../../components/unity/c/c10/c10-e5r/c10-e5r';
import { C10E5iComponent } from '../../../../components/unity/c/c10/c10-e5i/c10-e5i';
import { C10E6qComponent } from '../../../../components/unity/c/c10/c10-e6q/c10-e6q';
import { C10E6rComponent } from '../../../../components/unity/c/c10/c10-e6r/c10-e6r';
import { C10E6iComponent } from '../../../../components/unity/c/c10/c10-e6i/c10-e6i';
import { C10E7qComponent } from '../../../../components/unity/c/c10/c10-e7q/c10-e7q';
import { C10E7rComponent } from '../../../../components/unity/c/c10/c10-e7r/c10-e7r';
import { C10E7iComponent } from '../../../../components/unity/c/c10/c10-e7i/c10-e7i';
import { C10E8qComponent } from '../../../../components/unity/c/c10/c10-e8q/c10-e8q';
import { C10E8rComponent } from '../../../../components/unity/c/c10/c10-e8r/c10-e8r';
import { C10E8iComponent } from '../../../../components/unity/c/c10/c10-e8i/c10-e8i';
import { C10E9qComponent } from '../../../../components/unity/c/c10/c10-e9q/c10-e9q';
import { C10E9rComponent } from '../../../../components/unity/c/c10/c10-e9r/c10-e9r';
import { C10E9iComponent } from '../../../../components/unity/c/c10/c10-e9i/c10-e9i';
import { C10E10qComponent } from '../../../../components/unity/c/c10/c10-e10q/c10-e10q';
import { C10E10rComponent } from '../../../../components/unity/c/c10/c10-e10r/c10-e10r';
import { C10E10iComponent } from '../../../../components/unity/c/c10/c10-e10i/c10-e10i';
import { C10E11qComponent } from '../../../../components/unity/c/c10/c10-e11q/c10-e11q';
import { C10E11rComponent } from '../../../../components/unity/c/c10/c10-e11r/c10-e11r';
import { C10E11iComponent } from '../../../../components/unity/c/c10/c10-e11i/c10-e11i';
import { C10E12qComponent } from '../../../../components/unity/c/c10/c10-e12q/c10-e12q';
import { C10E12rComponent } from '../../../../components/unity/c/c10/c10-e12r/c10-e12r';
import { C10E12iComponent } from '../../../../components/unity/c/c10/c10-e12i/c10-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC10 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c10_1q': C10E1qComponent,
        'c10_1r': C10E1rComponent,
        'c10_1i': C10E1iComponent,
        'c10_2q': C10E2qComponent,
        'c10_2r': C10E2rComponent,
        'c10_2i': C10E2iComponent,
        'c10_3q': C10E3qComponent,
        'c10_3r': C10E3rComponent,
        'c10_3i': C10E3iComponent,
        'c10_4q': C10E4qComponent,
        'c10_4r': C10E4rComponent,
        'c10_4i': C10E4iComponent,
        'c10_5q': C10E5qComponent,
        'c10_5r': C10E5rComponent,
        'c10_5i': C10E5iComponent,
        'c10_6q': C10E6qComponent,
        'c10_6r': C10E6rComponent,
        'c10_6i': C10E6iComponent,
        'c10_7q': C10E7qComponent,
        'c10_7r': C10E7rComponent,
        'c10_7i': C10E7iComponent,
        'c10_8q': C10E8qComponent,
        'c10_8r': C10E8rComponent,
        'c10_8i': C10E8iComponent,
        'c10_9q': C10E9qComponent,
        'c10_9r': C10E9rComponent,
        'c10_9i': C10E9iComponent,
        'c10_10q': C10E10qComponent,
        'c10_10r': C10E10rComponent,
        'c10_10i': C10E10iComponent,
        'c10_11q': C10E11qComponent,
        'c10_11r': C10E11rComponent,
        'c10_11i': C10E11iComponent,
        'c10_12q': C10E12qComponent,
        'c10_12r': C10E12rComponent,
        'c10_12i': C10E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    