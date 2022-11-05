import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mouseIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEnter(event : any){
      this.router.navigate([`/buscador/${event.target.value}`]);
  }
}
