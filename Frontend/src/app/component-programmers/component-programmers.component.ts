import { Component, Input} from '@angular/core';

type ProgrammerPerfil = {
  name : string,
  experience : number,
  skills :  Array<string>,
  programmingLanguages :  Array<string>,
  type : string
}

@Component({
  selector: 'app-component-programmers',
  templateUrl: './component-programmers.component.html',
  styleUrls: ['./component-programmers.component.css']
})

export class ComponentProgrammersComponent {

  @Input() programmers : Array<ProgrammerPerfil> = []

  programmer: ProgrammerPerfil = {
    name : "",
    experience : 0,
    skills :  [],
    programmingLanguages : [],
    type : ""
  }

  addProgrammer(){
    if(this.validateName(this.programmer.name) &&  this.validateYearsExperience(this.programmer.experience)
    && this.validateSkills(this.programmer.skills) && this.validateProgrammingLanguages(this.programmer.programmingLanguages)
    && this.validateProgrammerType(this.programmer.type)){
      this.programmers.push(this.programmer)
    }
    this.programmer = {
      name : "",
      experience : 0,
      skills :  [],
      programmingLanguages : [],
      type : ""
    }
  }

  validateName(name:any): boolean{
    if(name == Number || name == ""){
      return false
    }
    return true
  }

  validateYearsExperience(years:any): boolean{
    if(years == String || years < 0 || years >= 23){
      return false
    }
    return true
  }

  validateSkills(skills:any){
    if(skills == ""){
      return false
    }
    this.programmer.skills = []
    const splitSkills = skills.split(",")
    for (const element of splitSkills){
      this.programmer.skills.push(element.trim())
    }
    return true
  }

  validateProgrammingLanguages(lenguages:any){
    if(lenguages == ""){
      return false
    }
    this.programmer.programmingLanguages = []
    const splitLanguages = lenguages.split(",")
    for (const element of splitLanguages){
      this.programmer.programmingLanguages.push(element.trim())
    }
    return true
  }

  validateProgrammerType(type:any){
    if(type == ""){
      return false
    }
    return true
  }

  delete(i:number){
    this.programmers.splice(i,1)
  }
}
