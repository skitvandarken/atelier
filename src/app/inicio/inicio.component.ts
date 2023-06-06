import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
 
  
  produtos : any[] = [];
  imagem : any = "http://127.0.0.1:8000/api/atelier"
  imagens = "ahha";

  constructor (private authservice:AuthService){

  }
  ngOnInit(): void {  
    this.authservice.produtopegar().subscribe(
      (res:any) =>{
        console.log(res),
        this.produtos = res;
        this.authservice.setmessage(res)
      }
    )
    
  }

  
  showImageFlag: boolean = false;
  imageSource: string = "assets/precario/alargamento.jpg";

  toggleImageVisibility() {
    this.showImageFlag = !this.showImageFlag;
  }


}

