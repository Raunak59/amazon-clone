import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  Register = new FormGroup({
    name: new FormControl(''),
    mob: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_pass: new FormControl('')
  });

  constructor(private user : UserServiceService){
    
  }
  

  ngOnInit(): void {
    
  }

  register(){
   var object = {
    name : this.Register.controls.name.value,
    mob : this.Register.controls.mob.value,
    email : this.Register.controls.email.value,
    password : this.Register.controls.password.value
   }

   this.user.registerUser(object).subscribe(response => {
    if(response){
      alert('Registered Succesfully');
      this.Register.controls.name.setValue('');
      this.Register.controls.mob.setValue('');
      this.Register.controls.email.setValue('');
      this.Register.controls.password.setValue('');
      this.Register.controls.repeat_pass.setValue('');
    }
   })
   
  }
}
