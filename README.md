# Step by Step Example Angular Ionic component data from parent to child with input decorator

of the  
[Ionic Framework](https://ionicframework.com/) and [Angular](https://angular.io/)

## Table of Contents

- [Getting Started](#getting-started)
- [Step by Step Example Angular Ionic component data from parent to child](#step-by-step)

## Getting Started

1. [Download the installer](https://nodejs.org/) for Node.js
   - check it with: `node --version`
2. Install the angular CLI globally: `npm install -g @angular/cli`
   - check it with: `ng --version`
3. Install the ionic CLI globally: `npm install -g ionic`
   - check it with: `ionic --version`
4. Create Ionic Template blank: `ionic start YourProjectName blank`
   - creates a new Folder with the Name: YourProjectName and with the blank template
5. Go to your newly created project: `cd .\YourProjectName`
6. Run `ionic serve` within the app directory to see your app
   - you see it in: [localhost:8100](http://localhost:8100)

## Step by Step

1. Create Component run `ionic g component testcomp`

2. Register the new Component in src\app\home\home.module.ts

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
// add new component
import { TestcompComponent } from "./../testcomp/testcomp.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, TestcompComponent]
})
export class HomePageModule {}
```

3. Change src\app\testcomp\testcomp.component.ts
   to use data from parent

```typescript
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
```

4. Change src/app/home/home.page.ts

```typescript
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
```

5. Use the component in src\app\home\home.page.html
   and put data to child

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Example Data from Parent
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- use the component and put data from parent -->
  {{ dataFromChild }}
  <app-testcomp
    [dataInTestcompComponentFromParent]="dataParent"
    (dataOutputFromChild)="onDataFromChild($event)"
  ></app-testcomp>
</ion-content>
```

6. Use the data from parent in src\app\testcomp\testcomp.component.html

```html
<p>
  testcomp works with Data from Parent:
</p>
<h1>{{ dataInTestcompComponentFromParent }}</h1>
<ion-button (click)="openDetailInParent(wert)">
  opendetail in Parent</ion-button
>
```

Ready
