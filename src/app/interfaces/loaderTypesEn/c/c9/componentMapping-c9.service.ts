import { Injectable, Type } from '@angular/core';
    //
    import { C9E1qComponent } from '../../../../components/unity/c/c9/c9-e1q/c9-e1q';
import { C9E1rComponent } from '../../../../components/unity/c/c9/c9-e1r/c9-e1r';
import { C9E1iComponent } from '../../../../components/unity/c/c9/c9-e1i/c9-e1i';
import { C9E2qComponent } from '../../../../components/unity/c/c9/c9-e2q/c9-e2q';
import { C9E2rComponent } from '../../../../components/unity/c/c9/c9-e2r/c9-e2r';
import { C9E2iComponent } from '../../../../components/unity/c/c9/c9-e2i/c9-e2i';
import { C9E3qComponent } from '../../../../components/unity/c/c9/c9-e3q/c9-e3q';
import { C9E3rComponent } from '../../../../components/unity/c/c9/c9-e3r/c9-e3r';
import { C9E3iComponent } from '../../../../components/unity/c/c9/c9-e3i/c9-e3i';
import { C9E4qComponent } from '../../../../components/unity/c/c9/c9-e4q/c9-e4q';
import { C9E4rComponent } from '../../../../components/unity/c/c9/c9-e4r/c9-e4r';
import { C9E4iComponent } from '../../../../components/unity/c/c9/c9-e4i/c9-e4i';
import { C9E5qComponent } from '../../../../components/unity/c/c9/c9-e5q/c9-e5q';
import { C9E5rComponent } from '../../../../components/unity/c/c9/c9-e5r/c9-e5r';
import { C9E5iComponent } from '../../../../components/unity/c/c9/c9-e5i/c9-e5i';
import { C9E6qComponent } from '../../../../components/unity/c/c9/c9-e6q/c9-e6q';
import { C9E6rComponent } from '../../../../components/unity/c/c9/c9-e6r/c9-e6r';
import { C9E6iComponent } from '../../../../components/unity/c/c9/c9-e6i/c9-e6i';
import { C9E7qComponent } from '../../../../components/unity/c/c9/c9-e7q/c9-e7q';
import { C9E7rComponent } from '../../../../components/unity/c/c9/c9-e7r/c9-e7r';
import { C9E7iComponent } from '../../../../components/unity/c/c9/c9-e7i/c9-e7i';
import { C9E8qComponent } from '../../../../components/unity/c/c9/c9-e8q/c9-e8q';
import { C9E8rComponent } from '../../../../components/unity/c/c9/c9-e8r/c9-e8r';
import { C9E8iComponent } from '../../../../components/unity/c/c9/c9-e8i/c9-e8i';
import { C9E9qComponent } from '../../../../components/unity/c/c9/c9-e9q/c9-e9q';
import { C9E9rComponent } from '../../../../components/unity/c/c9/c9-e9r/c9-e9r';
import { C9E9iComponent } from '../../../../components/unity/c/c9/c9-e9i/c9-e9i';
import { C9E10qComponent } from '../../../../components/unity/c/c9/c9-e10q/c9-e10q';
import { C9E10rComponent } from '../../../../components/unity/c/c9/c9-e10r/c9-e10r';
import { C9E10iComponent } from '../../../../components/unity/c/c9/c9-e10i/c9-e10i';
import { C9E11qComponent } from '../../../../components/unity/c/c9/c9-e11q/c9-e11q';
import { C9E11rComponent } from '../../../../components/unity/c/c9/c9-e11r/c9-e11r';
import { C9E11iComponent } from '../../../../components/unity/c/c9/c9-e11i/c9-e11i';
import { C9E12qComponent } from '../../../../components/unity/c/c9/c9-e12q/c9-e12q';
import { C9E12rComponent } from '../../../../components/unity/c/c9/c9-e12r/c9-e12r';
import { C9E12iComponent } from '../../../../components/unity/c/c9/c9-e12i/c9-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC9 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c9_1q': C9E1qComponent,
        'c9_1r': C9E1rComponent,
        'c9_1i': C9E1iComponent,
        'c9_2q': C9E2qComponent,
        'c9_2r': C9E2rComponent,
        'c9_2i': C9E2iComponent,
        'c9_3q': C9E3qComponent,
        'c9_3r': C9E3rComponent,
        'c9_3i': C9E3iComponent,
        'c9_4q': C9E4qComponent,
        'c9_4r': C9E4rComponent,
        'c9_4i': C9E4iComponent,
        'c9_5q': C9E5qComponent,
        'c9_5r': C9E5rComponent,
        'c9_5i': C9E5iComponent,
        'c9_6q': C9E6qComponent,
        'c9_6r': C9E6rComponent,
        'c9_6i': C9E6iComponent,
        'c9_7q': C9E7qComponent,
        'c9_7r': C9E7rComponent,
        'c9_7i': C9E7iComponent,
        'c9_8q': C9E8qComponent,
        'c9_8r': C9E8rComponent,
        'c9_8i': C9E8iComponent,
        'c9_9q': C9E9qComponent,
        'c9_9r': C9E9rComponent,
        'c9_9i': C9E9iComponent,
        'c9_10q': C9E10qComponent,
        'c9_10r': C9E10rComponent,
        'c9_10i': C9E10iComponent,
        'c9_11q': C9E11qComponent,
        'c9_11r': C9E11rComponent,
        'c9_11i': C9E11iComponent,
        'c9_12q': C9E12qComponent,
        'c9_12r': C9E12rComponent,
        'c9_12i': C9E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    