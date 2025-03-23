import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    weight:number = 0;
    height:number = 0;
    IMC:number = 0;
    imageName: string = "";

    onClickIMCCalculateButton(){
      this.IMC = this.weight/(this.height * this.height);
    }

    IMCClassifing(){
      if(this.IMC < 18.5) {
        this.imageName = "minorThan18.png"
      }
      
      else if(this.IMC <= 24.9) {
        this.imageName = "normal.png"
      }
      
      else if(this.IMC <= 29.9) {
        this.imageName = "overweight.png"
      }

      else if(this.IMC <= 34.9) {
        this.imageName = "obese.png"
      }

      else if(this.IMC <= 39.9) {
        this.imageName = "minorThan40.png"
      }

      else if(this.IMC >= 40) {
        this.imageName = "majorThan40.png"
      }

    }
}
