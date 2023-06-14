import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  sms = ""; 
  constructor(private authservice: AuthService, private router: Router){

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      nome_completo : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      senha : new FormControl('', [Validators.required]),
      senha_confirmar : new FormControl(''),
    })
  }

  get nome_completo (){
    return this.form.get("nome_completo")!
  }
  get email (){
    return this.form.get("email")!
  }

  get senha(){
    return this.form.get("senha")!
  }

  Submeter (){
    if (this.form.invalid){
      return;
    }
    const file = new FormData();
    file.append("nome_completo", this.form.value["nome_completo"])
    file.append("email", this.form.value["email"])
    file.append("senha", this.form.value["senha"])
    file.append("senha_confirmar", this.form.value["senha_confirmar"])

    this.authservice.register(file).subscribe(
      (res:any)=>{
        alert("Regisrto feito com sucesso !")
        this.router.navigate(["login"])
      },
     (erro:any)=>{
      //alert(erro.detail);
      for (var key in erro) {
        if (Object.prototype.hasOwnProperty.call(erro, key)) {
            const element = erro[key];
            if (element.detail==undefined)  {
              this.sms = "Usuário com este e-mail já existe." ;
            } else {
              this.sms = `${element.detail}` ;
            }
            
          }
        }
      }
    )
  }

}
