import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Navigation } from '../components/navigation/navigation.component';
import { HomeView } from '../components/home-view/home-view.component.js';
import { NestedView } from '../components/nestedView/nestedView.component.js';

@Component({
    selector: 'my-app',
    template: `
        <navigation></navigation>
        <router-outlet></router-outlet>
    `,
    directives: [
        ROUTER_DIRECTIVES,
        Navigation
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Main',
        component: HomeView,
        useAsDefault: true
    },
    {
        path: '/nested-view/...',
        name: 'NestedView',
        component: NestedView
    }
])

export class MyApp {

    constructor() {
        console.log('my-app Loaded');
    }
}