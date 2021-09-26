import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

    }
    clear(){
    // @ts-ignore
      document.getElementById("tela").value = '';
    }

    // @ts-ignore
  inserir (valor){
    // @ts-ignore
      document.getElementById('tela').value += valor;
    }

    calcular(){
    var resultado = 0;
    // @ts-ignore
      resultado = document.getElementById('tela').value;

      // @ts-ignore
      document.getElementById('tela').value = '';

      // @ts-ignore
      document.getElementById('tela').value = eval(resultado);
    }

}

