import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  faGithub = faGithub
  faEnvelope = faEnvelope
  faLinkedin = faLinkedin
  
  constructor() { }

  ngOnInit(): void {
  }

}
