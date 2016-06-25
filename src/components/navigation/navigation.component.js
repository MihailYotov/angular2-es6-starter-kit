import { Component } from 'angular2/core';

@Component({
    selector: 'navigation',
    template: `
       <section class="navigation">
            <a href="#">Home View</a>
            <a href="#/nested-view">Nested View</a>
       </section>
    `
})

export class Navigation {

}