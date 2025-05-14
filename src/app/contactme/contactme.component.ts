import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
 
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
   contact ={
    fullname:'',
    email:'',
    phone:'',
    subject:'',
    message:'',
    button:''
   };
   
   sumitform(){
    console.log('from Submitted' , this.contact);
    alert('Message sent successfully!');
   }
}
