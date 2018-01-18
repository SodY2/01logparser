import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  searchForm: FormGroup;
  result:Array<string>=[];

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.isLoading = false;
  }

  sniff() {
    this.isLoading = true;
    //this.result.push(this.searchForm.value.sourceCode);
    this.cleanlogs(this.searchForm.value.sourceCode)
    this.isLoading = false;
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      sourceCode: ['', Validators.required]
    });
  }

  cleanlogs(rawCode) {
    var self = this;
    var el = document.createElement( 'html' );
    el.innerHTML = rawCode;
    let dummy = Array.from(el.getElementsByTagName( 'tr' ));
    console.info(this.result)
    dummy.forEach(function(entry) {
      console.info(entry)
      self.result.push(entry)

    });
  console.log(self.result);
  }

}
