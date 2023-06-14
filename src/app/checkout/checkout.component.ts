import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  form!: FormGroup;
  produtos:any[] =[];
  imagem_http : any = "http://127.0.0.1:8000/api/atelier"
  pagarNome : string;
  file: File;
  img : string;


  constructor (private route: ActivatedRoute, private auth:AuthService){}
  
  ngOnInit(): void {
    this.auth.produtopegar().subscribe(
      (res:any) =>{
        this.produtos = res
        console.log(this.produtos[0])
      }
    )
    this.pagarNome = this.route.snapshot.params["name"]

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]), 
      medidadeIdade: new FormControl('', [Validators.required]),   
      requisicao: new FormControl(''),
      comprovativo: new FormControl(''),
      imagem: new FormControl('')
    })
    
  }

  get nome(){
    return this.form.get("nome")!;
  }

  get email(){
    return this.form.get("email")!;
  }

  get telefone(){
    return this.form.get("telefone")!;
  }

  get medidadeIdade(){
    return this.form.get("medidadeIdade")!;
  }
  

  Onfile(event:any){
     this.file  = event.target.files[0];

    this.form.patchValue({
      comprovativo : this.file
    })
  }

  pegarImagem(event:any){
    this.img = event
    console.log(this.img)

    this.form.patchValue({
      imagem : this.img
    })
  }

  submeter(){
    if (this.form.invalid){
      return;
    }
    console.log(this.form.value)
    const file = new FormData();
    file.append("comprovativo", this.form.value["comprovativo"])
    file.append("imagem", this.form.value["imagem"])
    file.append("nome", this.form.value["nome"])
    file.append("telefone", this.form.value["telefone"])
    file.append("requisicao", this.form.value["requisicao"])
    file.append("medidadeIdade", this.form.value["medidadeIdade"])
    file.append("email", this.form.value["email"])

    this.auth.enviaremail(file).subscribe(
      () =>{
        alert("os dados foram enviados aguarde a verificacao do agent !")
      }
    )    
  }
  
}
