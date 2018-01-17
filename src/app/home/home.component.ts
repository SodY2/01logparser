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

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.isLoading = false;
  }

  sniff() {
    this.isLoading = true;
    console.info(this.searchForm.value)
    this.isLoading = false;
  }

  private createForm() {
    this.searchForm = this.formBuilder.group({
      sourceCode: ['', Validators.required]
    });
  }

}
