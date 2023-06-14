import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{
  form!:FormGroup;
  imagens_1! : File;
  imagens_2! : File;
  imagens_3! : File;
  nome!:string;
  
  constructor (private authService: AuthService, private formbuilder: FormBuilder){}
  
  Onnome(file:any){
    this.nome = file.target.value;
  }

  Onimg1(file:any){
    this.imagens_1 = file.target.files[0];
  }

  Onimg2(file:any){
    this.imagens_2 = file.target.files[0];
  }

  Onimg3(file:any){
    this.imagens_3 = file.target.files[0];
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({

    })
  }

  fazeruploder(){
    const file = new FormData();
    file.append("nome", this.nome),
    file.append("imagem_1", this.imagens_1),
    file.append("imagem_2", this.imagens_2),
    file.append("imagem_3", this.imagens_3),
    
    this.authService.produto(file).subscribe(
      () =>{
        alert("feito com sucesso !");
      }
    )
  }

}
