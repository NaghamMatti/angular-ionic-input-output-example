// add Input
import { Component, OnInit, Input } from "@angular/core";
//1 add the output
import { EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-testcomp",
  templateUrl: "./testcomp.component.html",
  styleUrls: ["./testcomp.component.scss"]
})
export class TestcompComponent implements OnInit {
  // declare the data as @Input()
  @Input() dataInTestcompComponentFromParent;
  //2
  // output for the message to the parent
  @Output() dataOutputFromChild = new EventEmitter<any>();
  wert = "send the Data from the Child to Parent";

  //3
  // the function to emit
  openDetailInParent(value) {
    this.dataOutputFromChild.emit(value);
  }

  constructor() {}

  ngOnInit() {}
}
