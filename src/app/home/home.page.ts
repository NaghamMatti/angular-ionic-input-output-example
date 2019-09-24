import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  // example data
  dataParent = "DATA FROM PARENT";
  //mydata from the child
  dataFromChild;

  constructor() {}
  onDataFromChild(value) {
    this.dataFromChild = value;
  }
}
