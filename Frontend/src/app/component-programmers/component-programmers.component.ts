import { Component } from '@angular/core';

type Programmer = {
  name : string,
  yearsExperience : number,
  skills :  Array<string>,
  programmingLanguages :  Array<string>
}

@Component({
  selector: 'app-component-programmers',
  templateUrl: './component-programmers.component.html',
  styleUrls: ['./component-programmers.component.css']
})

export class ComponentProgrammersComponent {

  programmers : Array<Programmer> = []

  programmer: Programmer = {
    name : "",
    yearsExperience : 0,
    skills :  [],
    programmingLanguages : []
  }

  addProgrammer(){
    this.programmers.push(this.programmer)
  }

  validateName(name:string){
    
  }

  validateYearsExperience(){
    
  }

  validateSkills(){
    
  }

  validateProgrammingLanguages(){

  }

  delete(i:number){
    this.programmers.splice(i,1)
  }
}
