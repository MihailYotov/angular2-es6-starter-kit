import { Component } from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';

import { HttpService } from '../../services/http-service'

@Component({
    selector: 'home-view',
    template: `
        <div class="home-view">
            <h1>Home View</h1>
            <div>
                <span>{{httpData[0]?.name}}</span>
                <span>{{httpData[0]?.capital}}</span>
            </div>
        </div>
    `,
    providers: [ HTTP_PROVIDERS ]
})

export class HomeView {
    constructor (httpService: HttpService){
        this._httpService = httpService;
        this.httpData = [];

        this._httpService.getData()
            .then(data => {
                this.httpData = data;
            }, error => {
                console.warn(error.message)
            })

    }
}