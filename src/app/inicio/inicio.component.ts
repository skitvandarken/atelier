import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  showImageFlag: boolean = false;
  imageSource: string = "assets/precario/alargamento.jpg";

  toggleImageVisibility() {
    this.showImageFlag = !this.showImageFlag;
  }

}

