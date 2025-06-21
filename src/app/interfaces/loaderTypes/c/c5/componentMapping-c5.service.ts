import { Injectable, Type } from '@angular/core';
    //
    import { C5E1qComponent } from '../../../../components/unity/c/c5/c5-e1q/c5-e1q';
import { C5E1rComponent } from '../../../../components/unity/c/c5/c5-e1r/c5-e1r';
import { C5E1iComponent } from '../../../../components/unity/c/c5/c5-e1i/c5-e1i';
import { C5E2qComponent } from '../../../../components/unity/c/c5/c5-e2q/c5-e2q';
import { C5E2rComponent } from '../../../../components/unity/c/c5/c5-e2r/c5-e2r';
import { C5E2iComponent } from '../../../../components/unity/c/c5/c5-e2i/c5-e2i';
import { C5E3qComponent } from '../../../../components/unity/c/c5/c5-e3q/c5-e3q';
import { C5E3rComponent } from '../../../../components/unity/c/c5/c5-e3r/c5-e3r';
import { C5E3iComponent } from '../../../../components/unity/c/c5/c5-e3i/c5-e3i';
import { C5E4qComponent } from '../../../../components/unity/c/c5/c5-e4q/c5-e4q';
import { C5E4rComponent } from '../../../../components/unity/c/c5/c5-e4r/c5-e4r';
import { C5E4iComponent } from '../../../../components/unity/c/c5/c5-e4i/c5-e4i';
import { C5E5qComponent } from '../../../../components/unity/c/c5/c5-e5q/c5-e5q';
import { C5E5rComponent } from '../../../../components/unity/c/c5/c5-e5r/c5-e5r';
import { C5E5iComponent } from '../../../../components/unity/c/c5/c5-e5i/c5-e5i';
import { C5E6qComponent } from '../../../../components/unity/c/c5/c5-e6q/c5-e6q';
import { C5E6rComponent } from '../../../../components/unity/c/c5/c5-e6r/c5-e6r';
import { C5E6iComponent } from '../../../../components/unity/c/c5/c5-e6i/c5-e6i';
import { C5E7qComponent } from '../../../../components/unity/c/c5/c5-e7q/c5-e7q';
import { C5E7rComponent } from '../../../../components/unity/c/c5/c5-e7r/c5-e7r';
import { C5E7iComponent } from '../../../../components/unity/c/c5/c5-e7i/c5-e7i';
import { C5E8qComponent } from '../../../../components/unity/c/c5/c5-e8q/c5-e8q';
import { C5E8rComponent } from '../../../../components/unity/c/c5/c5-e8r/c5-e8r';
import { C5E8iComponent } from '../../../../components/unity/c/c5/c5-e8i/c5-e8i';
import { C5E9qComponent } from '../../../../components/unity/c/c5/c5-e9q/c5-e9q';
import { C5E9rComponent } from '../../../../components/unity/c/c5/c5-e9r/c5-e9r';
import { C5E9iComponent } from '../../../../components/unity/c/c5/c5-e9i/c5-e9i';
import { C5E10qComponent } from '../../../../components/unity/c/c5/c5-e10q/c5-e10q';
import { C5E10rComponent } from '../../../../components/unity/c/c5/c5-e10r/c5-e10r';
import { C5E10iComponent } from '../../../../components/unity/c/c5/c5-e10i/c5-e10i';
import { C5E11qComponent } from '../../../../components/unity/c/c5/c5-e11q/c5-e11q';
import { C5E11rComponent } from '../../../../components/unity/c/c5/c5-e11r/c5-e11r';
import { C5E11iComponent } from '../../../../components/unity/c/c5/c5-e11i/c5-e11i';
import { C5E12qComponent } from '../../../../components/unity/c/c5/c5-e12q/c5-e12q';
import { C5E12rComponent } from '../../../../components/unity/c/c5/c5-e12r/c5-e12r';
import { C5E12iComponent } from '../../../../components/unity/c/c5/c5-e12i/c5-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingC5 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'c5_1q': C5E1qComponent,
        'c5_1r': C5E1rComponent,
        'c5_1i': C5E1iComponent,
        'c5_2q': C5E2qComponent,
        'c5_2r': C5E2rComponent,
        'c5_2i': C5E2iComponent,
        'c5_3q': C5E3qComponent,
        'c5_3r': C5E3rComponent,
        'c5_3i': C5E3iComponent,
        'c5_4q': C5E4qComponent,
        'c5_4r': C5E4rComponent,
        'c5_4i': C5E4iComponent,
        'c5_5q': C5E5qComponent,
        'c5_5r': C5E5rComponent,
        'c5_5i': C5E5iComponent,
        'c5_6q': C5E6qComponent,
        'c5_6r': C5E6rComponent,
        'c5_6i': C5E6iComponent,
        'c5_7q': C5E7qComponent,
        'c5_7r': C5E7rComponent,
        'c5_7i': C5E7iComponent,
        'c5_8q': C5E8qComponent,
        'c5_8r': C5E8rComponent,
        'c5_8i': C5E8iComponent,
        'c5_9q': C5E9qComponent,
        'c5_9r': C5E9rComponent,
        'c5_9i': C5E9iComponent,
        'c5_10q': C5E10qComponent,
        'c5_10r': C5E10rComponent,
        'c5_10i': C5E10iComponent,
        'c5_11q': C5E11qComponent,
        'c5_11r': C5E11rComponent,
        'c5_11i': C5E11iComponent,
        'c5_12q': C5E12qComponent,
        'c5_12r': C5E12rComponent,
        'c5_12i': C5E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    