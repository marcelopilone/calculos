import { Component, h,Prop } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  //shadow: true
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

  @Prop() mensaje:string = '';

  @Prop() estilo:string = '';

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

    let resultadoFinal:number = 0;
    if(this.queOperacion=='+'){
       resultadoFinal = this.primerNumero + this.segundoNumero;
    }
    if(this.queOperacion=='-'){
      resultadoFinal = this.primerNumero - this.segundoNumero;
    }
    if(this.queOperacion=='*'){
       resultadoFinal = this.primerNumero * this.segundoNumero;
    }
    if(this.queOperacion=='/'){
       resultadoFinal = Math.round(this.primerNumero / this.segundoNumero);
    }


    this.mensaje = 'Ha resuelto mal, vuelva a intentarlo';
    console.log(resultadoFinal);
    console.log(this.resultado);
    this.estilo = 'danger';
    if( resultadoFinal == this.resultado ){
      setTimeout(() => {
          window.location.reload();
      }, 3000);
      this.estilo = 'success';
      this.mensaje = 'Ha resuelto con exito, vallamos a la siguiente';
    }
    return this.mensaje;
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
        <form onSubmit={(e) => this.handleSubmit(e)} id='formulario'>
            <ion-toolbar>
                <ion-title size="large" color="primary">Resolve la operación</ion-title>
            </ion-toolbar>
            <ion-item>
                  <ion-label position="stacked" color="primary"><strong>Primer Número: </strong></ion-label>
                  <ion-input type="number" value={this.primerNumero} onInput={(event) => this.handleChangePrimerNumero(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-label position="fixed" color="primary"><strong>Operación: </strong></ion-label>
                  <ion-input type="string" value={this.queOperacion} onInput={(event) => this.handleChangeQueOperacion(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-label position="stacked" color="primary"><strong>Segundo Número: </strong></ion-label>
                  <ion-input type="number" value={this.segundoNumero} onInput={(event) => this.handleChangeSegundoNumero(event)} disabled></ion-input>
            </ion-item>
            <ion-item>
                  <ion-label position="fixed">Resultado = </ion-label>
                  <ion-input type="number" value={this.resultado} onInput={(event) => this.handleChangeResultado(event)} placeholder="XXXX" required></ion-input>
            </ion-item><br/>
              <ion-button type="submit" expand="block" id="botonResolver" color="success">Resolver</ion-button>
        </form><br/>
        <ion-item>
            <ion-label color={this.estilo}>
                {this.mensaje} 
            </ion-label>
        </ion-item>
      </div>
    ];
  }
}
