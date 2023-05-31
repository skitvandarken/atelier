import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router: Router){

  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      nome_completo : "",
      email : "",
      senha : "",
      palavra_passe: ""
    })
  }

  Submeter (){
    this.authservice.register(this.form.getRawValue()).subscribe(
      (res:any) =>{
        alert("Regisrto feito com sucesso !")
        this.router.navigate(["login"])
      },
    (erro:any)=>{
      //alert(erro.detail);
      console.log(erro)
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
