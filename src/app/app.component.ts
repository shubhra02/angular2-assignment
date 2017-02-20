import {Component, OnInit} from '@angular/core';
import {Intern} from "./intern";
import {AppService} from "./app.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [AppService]
})
export class AppComponent implements OnInit {
    name = 'Angular';
    color: string = 'red';
    intern: Intern = new Intern();
    myInterns: Intern[];
    date: Date[] = [];
    title: string[] = [];
    description: string[] = [];
    priority: string[] = [];


    constructor(private service: AppService) {
    }

    ngOnInit() {
        this.myInterns = this.service.interns;
    }

    clickMe(param: string) {
        alert(param)
    }

    submit() {
        alert(JSON.stringify(this.intern.id))
    }

    getData(date: Date, title: string, description: string, priority: string) {
        this.date.push(date);
        this.title.push(title);
        this.description.push(description);
        this.priority.push(priority);
        alert("Hi, Your details are: " + date + " " + title + " " + description + " " + priority);


    }

    showData() {
        alert("priority " + this.priority);
        alert("date " + this.date);
        alert("title" + this.title);

    }
}
