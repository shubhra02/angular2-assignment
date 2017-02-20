import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Intern} from "../intern";
import {AppService} from "../app.service";

@Component({
  selector: 'login',
  templateUrl: './app/login/login.component.html',
  styleUrls: ['']
})
export class LoginComponent implements OnInit{
  index: number;
  intern: Intern;
  date: Date[]=[];
  title: string[]=[];
  description: string[]=[];
  priority: string[]=[];
  showTask: boolean;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: AppService) {}

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.id;
      this.intern = this.service.interns.filter((intern: Intern) => intern.id === this.index)[0];
      alert(JSON.stringify(this.intern))
    });

  }

   goToHome() {
     this.router.navigate(['home'])
   }
  getData(date:Date, title:string,description:string,priority:string) {
    this.date.push(date);
    this.title.push(title);
    this.description.push(description);
    this.priority.push(priority);
    alert("Hi, Your details are: "+date+" "+title+" "+description+" "+priority);
  }
}
