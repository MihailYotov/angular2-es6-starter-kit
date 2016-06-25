import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ChildOne } from '../child-one/child-one.component.js';
import { ChildTwo } from '../child-two/chuld-two.component.js';

@Component({
    selector: 'nested-view',
    directives: [
        ROUTER_DIRECTIVES
    ],
    template: `
        <div class="nested-view">
            <h1>Nested View - Parent</h1>
            <ul>
                <li><a href="" [routerLink]="['ChildOne']">Child One</a></li>
                <li><a href="" [routerLink]="['ChildTwo']">Child Two</a></li>
            </ul>
            <div>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

@RouteConfig([
    {
        path: '/child-one',
        name: 'ChildOne',
        component: ChildOne,
        useAsDefault: true
    },
    {
        path: '/child-two',
        name: 'ChildTwo',
        component: ChildTwo
    }
])

export class NestedView {

}