import { Injectable, Type } from '@angular/core';
    //
    import { D3E1qComponent } from '../../../../components/unity/d/d3/d3-e1q/d3-e1q';
import { D3E1rComponent } from '../../../../components/unity/d/d3/d3-e1r/d3-e1r';
import { D3E1iComponent } from '../../../../components/unity/d/d3/d3-e1i/d3-e1i';
import { D3E2qComponent } from '../../../../components/unity/d/d3/d3-e2q/d3-e2q';
import { D3E2rComponent } from '../../../../components/unity/d/d3/d3-e2r/d3-e2r';
import { D3E2iComponent } from '../../../../components/unity/d/d3/d3-e2i/d3-e2i';
import { D3E3qComponent } from '../../../../components/unity/d/d3/d3-e3q/d3-e3q';
import { D3E3rComponent } from '../../../../components/unity/d/d3/d3-e3r/d3-e3r';
import { D3E3iComponent } from '../../../../components/unity/d/d3/d3-e3i/d3-e3i';
import { D3E4qComponent } from '../../../../components/unity/d/d3/d3-e4q/d3-e4q';
import { D3E4rComponent } from '../../../../components/unity/d/d3/d3-e4r/d3-e4r';
import { D3E4iComponent } from '../../../../components/unity/d/d3/d3-e4i/d3-e4i';
import { D3E5qComponent } from '../../../../components/unity/d/d3/d3-e5q/d3-e5q';
import { D3E5rComponent } from '../../../../components/unity/d/d3/d3-e5r/d3-e5r';
import { D3E5iComponent } from '../../../../components/unity/d/d3/d3-e5i/d3-e5i';
import { D3E6qComponent } from '../../../../components/unity/d/d3/d3-e6q/d3-e6q';
import { D3E6rComponent } from '../../../../components/unity/d/d3/d3-e6r/d3-e6r';
import { D3E6iComponent } from '../../../../components/unity/d/d3/d3-e6i/d3-e6i';
import { D3E7qComponent } from '../../../../components/unity/d/d3/d3-e7q/d3-e7q';
import { D3E7rComponent } from '../../../../components/unity/d/d3/d3-e7r/d3-e7r';
import { D3E7iComponent } from '../../../../components/unity/d/d3/d3-e7i/d3-e7i';
import { D3E8qComponent } from '../../../../components/unity/d/d3/d3-e8q/d3-e8q';
import { D3E8rComponent } from '../../../../components/unity/d/d3/d3-e8r/d3-e8r';
import { D3E8iComponent } from '../../../../components/unity/d/d3/d3-e8i/d3-e8i';
import { D3E9qComponent } from '../../../../components/unity/d/d3/d3-e9q/d3-e9q';
import { D3E9rComponent } from '../../../../components/unity/d/d3/d3-e9r/d3-e9r';
import { D3E9iComponent } from '../../../../components/unity/d/d3/d3-e9i/d3-e9i';
import { D3E10qComponent } from '../../../../components/unity/d/d3/d3-e10q/d3-e10q';
import { D3E10rComponent } from '../../../../components/unity/d/d3/d3-e10r/d3-e10r';
import { D3E10iComponent } from '../../../../components/unity/d/d3/d3-e10i/d3-e10i';
import { D3E11qComponent } from '../../../../components/unity/d/d3/d3-e11q/d3-e11q';
import { D3E11rComponent } from '../../../../components/unity/d/d3/d3-e11r/d3-e11r';
import { D3E11iComponent } from '../../../../components/unity/d/d3/d3-e11i/d3-e11i';
import { D3E12qComponent } from '../../../../components/unity/d/d3/d3-e12q/d3-e12q';
import { D3E12rComponent } from '../../../../components/unity/d/d3/d3-e12r/d3-e12r';
import { D3E12iComponent } from '../../../../components/unity/d/d3/d3-e12i/d3-e12i';
    @Injectable({
    providedIn: 'root'
    })
    export class ComponentMappingD3 {
    
    constructor() { }

    getComponent(componentName: string): Type<any> | null { 
        const componentMapping: { [key: string]: Type<any> } = {
            'd3_1q': D3E1qComponent,
        'd3_1r': D3E1rComponent,
        'd3_1i': D3E1iComponent,
        'd3_2q': D3E2qComponent,
        'd3_2r': D3E2rComponent,
        'd3_2i': D3E2iComponent,
        'd3_3q': D3E3qComponent,
        'd3_3r': D3E3rComponent,
        'd3_3i': D3E3iComponent,
        'd3_4q': D3E4qComponent,
        'd3_4r': D3E4rComponent,
        'd3_4i': D3E4iComponent,
        'd3_5q': D3E5qComponent,
        'd3_5r': D3E5rComponent,
        'd3_5i': D3E5iComponent,
        'd3_6q': D3E6qComponent,
        'd3_6r': D3E6rComponent,
        'd3_6i': D3E6iComponent,
        'd3_7q': D3E7qComponent,
        'd3_7r': D3E7rComponent,
        'd3_7i': D3E7iComponent,
        'd3_8q': D3E8qComponent,
        'd3_8r': D3E8rComponent,
        'd3_8i': D3E8iComponent,
        'd3_9q': D3E9qComponent,
        'd3_9r': D3E9rComponent,
        'd3_9i': D3E9iComponent,
        'd3_10q': D3E10qComponent,
        'd3_10r': D3E10rComponent,
        'd3_10i': D3E10iComponent,
        'd3_11q': D3E11qComponent,
        'd3_11r': D3E11rComponent,
        'd3_11i': D3E11iComponent,
        'd3_12q': D3E12qComponent,
        'd3_12r': D3E12rComponent,
        'd3_12i': D3E12iComponent,
        }; 
        return componentMapping[componentName] || null;
    }
    } 
    