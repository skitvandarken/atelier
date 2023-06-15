import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  sms = "";
  
constructor (private formbuilder: FormBuilder, private authservice:AuthService, private router: Router){

}

  ngOnInit(): void {
   this.form = this.formbuilder.group({
    email:"",
    senha:""
   })
  }

  submeter(){
    this.authservice.login(this.form.getRawValue()).subscribe(
      (res:any) =>
      { 
        this.authservice.accetoken = res.token;
        this.router.navigate(["dashboard"])

    },
    (erro:any)=>{
      //alert(erro.detail);
      for (var key in erro) {
        if (Object.prototype.hasOwnProperty.call(erro, key)) {
          const element = erro[key];
          this.sms = `${element.detail}` ;
        }
      }
    }
    )
  }

}
