import { Component } from '@angular/core';
import{Router}from'@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
image:string="assets/utilisateur.jpg"
constructor(private router:Router){}
versInscription(){
  this.router.navigate(['/inscription'])
}

togglePasswordVisibility(passwordInput: HTMLInputElement): void {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  
}
}
