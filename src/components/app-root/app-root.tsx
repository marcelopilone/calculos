import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
        //<ion-button>sdfsdfsdfsdfsdffffffffffffff</ion-button>
        /*<main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>*/

  @Prop() primerNumero: number = this.randomInt(1,1000);

  @Prop() segundoNumero: number = this.randomInt(1,1000);

  @Prop() resultado: number;

  @Prop() queOperacion: string = this.randomOperacion();

  randomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomOperacion(){
    let operaciones:any = ['+','-','/','*'];
    const cualquierOperacion = operaciones[Math.floor(Math.random() * operaciones.length)];

    return cualquierOperacion;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.primerNumero);
    console.log(this.queOperacion);
    console.log(this.segundoNumero);
    console.log(this.resultado);

    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.queOperacion=='-'){
      reducer = (accumulator, currentValue) => accumulator - currentValue;
    }
    if(this.queOperacion=='*'){
       reducer = (accumulator, currentValue) => accumulator * currentValue; 
    }
    if(this.queOperacion=='/'){
       reducer = (accumulator, currentValue) => accumulator / currentValue;  
    }

    let arrayRandom = [this.primerNumero, this.segundoNumero];

    let resultadoFinal = arrayRandom.reduce(reducer);
    
    console.log(resultadoFinal);
  }

  handleChangePrimerNumero(event) {
    this.primerNumero = event.target.value;
  }

  handleChangeSegundoNumero(event) {
    this.segundoNumero = event.target.value;
  }

  handleChangeQueOperacion(event) {
    this.queOperacion = event.target.value;
  }

  handleChangeResultado(event) {
    this.resultado = event.target.value;
  }

  render() {
    return [
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <ion-toolbar>
                <ion-title size="large" class="colorTitulo">Resolve la operación</ion-title>
            </ion-toolbar>
            <ion-item>
                  <ion-label position="fixed">Primer Número</ion-label>
                  <ion-input type="number" value={this.primerNumero} onInput={(event) => this.handleChangePrimerNumero(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-input type="string" value={this.queOperacion} onInput={(event) => this.handleChangeQueOperacion(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-label position="fixed">Segundo Número</ion-label>
                  <ion-input type="number" value={this.segundoNumero} onInput={(event) => this.handleChangeSegundoNumero(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-label position="fixed">Resultado</ion-label>
                  <ion-input type="number" value={this.resultado} onInput={(event) => this.handleChangeResultado(event)} required></ion-input>
            </ion-item><br/>
            <ion-button type="submit" expand="block">Resolver</ion-button>
        </form>
        
      </div>
    ];
  }
}
