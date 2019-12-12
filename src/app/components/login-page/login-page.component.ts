import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ghostButtons = document.querySelectorAll(".button__ghost");
    ghostButtons.forEach(function (button) {
      const formRightWrapper = document.querySelector(".form-wrapper__right");
      const formRightSignIn = document.querySelector(
        ".form-wrapper__right--sign-in"
      );
      const formRightSignUp = document.querySelector(
        ".form-wrapper__right--sign-up"
      );
      const formLeftSignIn = document.querySelector(
        ".form-wrapper__left--sign-in"
      );
      const formLeftSignUp = document.querySelector(
        ".form-wrapper__left--sign-up"
      );
      button.addEventListener("click", function () {
        formRightSignIn.classList.toggle("inactive");
        formRightSignUp.classList.toggle("inactive");
        formLeftSignIn.classList.toggle("inactive");
        formLeftSignUp.classList.toggle("inactive");
        formRightWrapper.classList.toggle("is-flipped");
      });
    });
  }

}
