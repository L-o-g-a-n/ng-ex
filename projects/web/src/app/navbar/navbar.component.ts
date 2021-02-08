import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ne-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Menu1 = {
    name: 'Menu1111111',
    link: 'https://naver.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
