import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'nts-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css']
})
export class QuadraticEquationComponent implements OnInit, DoCheck {

  a: number;
  b: number;
  c: number;

  delta: number;
  x1: number;
  x2: number;

  ngOnInit() {
    this.a = 2;
    this.b = 8;
    this.c = -10;
  }

  ngDoCheck() {
    const {a, b, c} = this;
    this.delta = (b * b) - (4 * a * c);
    const deltaSqrt = Math.sqrt(this.delta);
    const doubleA = 2 * this.a;
    this.x1 = (this.b - deltaSqrt) / doubleA;
    this.x2 = (-this.b - deltaSqrt) / doubleA;
  }
}
