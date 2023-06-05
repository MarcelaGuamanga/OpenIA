import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Frontend';

  dataResponseOpenIA : any;
  dataRequestOpenIA :  any = {};
  resultado = false;
  programmerList: any = []
  HUList: any =[]

  isDisplayedLoading = true;

  constructor( private appService : AppService) {}

  calculateResponse(userStories : Array<string>, programmerProfiles:any){
    this.dataRequestOpenIA = {
      "user_stories" : userStories,
      "programmer_profiles": programmerProfiles
    }
    if(userStories.length != 0 && programmerProfiles.length != 0){
      this.appService.postOpenIA(this.dataRequestOpenIA).pipe(
        tap(() => (this.isDisplayedLoading = false)),
      ).subscribe( data => {
        this.dataResponseOpenIA = Object.values(data);
        this.isDisplayedLoading = true;
      });
      this.resultado = true;
      this.programmerList = [];
      this.HUList = [];
    }
  }

}
