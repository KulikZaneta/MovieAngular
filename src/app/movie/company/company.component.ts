import { Component, OnInit } from '@angular/core';
import { CompanyControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import { CompanyDetailsRest, OtherNameCompanyRest } from 'src/api/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public companyDetails: Observable<CompanyDetailsRest>
  public companyOtherName: Observable<OtherNameCompanyRest>
  constructor(public companyControllerService: CompanyControllerService) { }

  ngOnInit() {
    this.companyDetails = this.companyControllerService.getCompanyDetailsUsingGET(240);
    this.companyOtherName = this.companyControllerService.getOtherNameUsingGET(240);

  }

}
