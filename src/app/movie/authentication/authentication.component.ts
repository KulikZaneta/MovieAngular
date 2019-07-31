import { Component, OnInit } from '@angular/core';
import { AuthenticationControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import { GuestSessionRest, TokenRest } from 'src/api/models';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public session: Observable<GuestSessionRest>
  public token: Observable<TokenRest>
  constructor(public authControllerService: AuthenticationControllerService) { }

  ngOnInit() {
    this.token = this.authControllerService.getCreateTokenUsingGET();
    this.session = this.authControllerService.getSessionUsingGET();
  }

}
