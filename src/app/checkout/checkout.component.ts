import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  messsage:any[] =[];
  imagem : any = "http://127.0.0.1:8000/api/atelier";
  comprovativo : File;
  requesicao : string;
  media_idade : string;
  pagarNome : string;

  @Input() name:string;

  constructor (private route: ActivatedRoute, private auth:AuthService){}
  
  ngOnInit(): void {
    this.auth.produtopegar().subscribe(
      (res:any) =>{
        this.messsage = res
      }
    )
    this.pagarNome = this.route.snapshot.params["name"]
  }

  requ(file:any){
    this.requesicao = file.target.value;
  }

  compr(file:any){
    this.comprovativo = file.target.files[0];
  }

  idade(file:any){
    this.media_idade = file.target.value;
  }

  enviar(){
    const valor = new FormData();
    valor.append("requisicao", this.requesicao)
    console.log(valor)

  }


}
