import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboardside',
  templateUrl: './dashboardside.component.html',
  styleUrls: ['./dashboardside.component.css']
})
export class DashboardsideComponent implements OnInit{
  message = ""
  
  constructor (private authservice: AuthService){}

  ngOnInit(): void {
     this.authservice.user().subscribe({
      next: (res:any) => { this.message = `${res.nome_completo}`
    },
    error : () =>{
        this.message = "ddd"
    }
     }
      
  )}
}
