import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
    <h2 (click)="onSelect()" [class.click]="showDetails === true">{{contact.firstName}} {{contact.lastName}}</h2>
    <div *ngIf = "showDetails === true">
    Phone Number : {{contact.phone}}<br>
    Email ID: {{contact.email}}
    </div>
    `,
    styleUrls: ["./src/css/app.css"]
})

export class AppComponent {
    public contact = {firstName: "Srikanth", lastName: "Sriram", phone: "925-361-2117", email: "srikanth@gmail.com"};

public showDetails = false;

onSelect (){
    this.showDetails = true;
}
}