import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  //results: any[] = [
  //      {
  //        "name": "Juego 1",
  //        "value": 25
  //      },
  //      {
  //        "name": "Juego 2",
  //        "value": 13
  //      },
  //      {
  //        "name": "Juego 3",
  //        "value": 12
  //      },
  //      {
  //        "name": "Juego 4",
  //        "value": 30
  //      }
  //  ];

 

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  legendTitle: string = 'Games';

  colorScheme = 'nightLights';

  //intervalo;

  constructor() {

    //this.intervalo = setInterval( () => {
    //  console.log('tick');
    //  const newResults = [...this.results];
    //  for(let i in newResults){
    //    newResults[i].value = Math.round(Math.random() * 500)
    //  }
    //  this.results = [...newResults];
    //},1500);

    

   }
  ngOnDestroy() {
    //clearInterval(this.intervalo);
  }

 onSelect(data): void {
    console.log(data);
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  
}
