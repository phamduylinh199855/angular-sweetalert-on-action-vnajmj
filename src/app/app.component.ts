import { Component } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// sweetalert2
// @toverux/ngx-sweetalert2
// @angular/animations
// https://sweetalert2.github.io/#usage
export class AppComponent {
  name = 'Angular';
  constructor() {}
  test() {
    Swal.fire({
      title: 'Success!',
      text: 'Do you want to continue',
      type: 'info',
      // warning,
      // error,
      // success,
      // info,
      // question
      confirmButtonText: 'Cool',
      cancelButtonText: 'Cancel'
    });
  }
}
