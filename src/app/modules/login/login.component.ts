import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { properties } from 'src/assets/properties/properties';
import { ConstantUri } from 'src/app/utils/constantUri';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logo = properties.logo;

  formLogin: FormGroup = new FormGroup({})

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService<any>
  ) { }


  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  login() {

    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched()

      for (const key in this.formLogin.controls) {
        this.formLogin.controls[key].markAsDirty();
      }

      return

    }


    const { username, password } = this.formLogin.value

    const body = {
      username,
      password,
      request_token: sessionStorage.getItem("requestToken")
    }

    const configPost = { url: ConstantUri.validateWithLogin, params: {api_key: ConstantUri.apiKey}, body }

    this.apiService.postService(configPost).subscribe(val => {
      console.log(val)
    })
    
    console.log(this.formLogin.value)

  }
}
