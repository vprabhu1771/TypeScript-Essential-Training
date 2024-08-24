import { Component } from '@angular/core';
import { Category } from './models/category';
import { WebService } from './services/WebService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dropdown';

  constructor(private web_service: WebService) {}

  listOfCategory!: Category[];

  ngOnInit() {
    this.web_service.getCategoryList().subscribe(
      data => { this.listOfCategory = data; }
    )
  }

  ChangeCategory(event: any) 
  {
    console.log(event.target.value);
    
  }
}
