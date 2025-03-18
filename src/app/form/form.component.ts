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

    onClickIMCCalculateButton(){
      this.IMC = this.weight/(this.height * this.height);
    }
}
