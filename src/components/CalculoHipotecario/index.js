import React from "react";
import TablaAmortizacion from "./TablaAmortizacion";

function ChecarMontoInicial(deuda, valorPagoAnual, interesAnual){
    debugger;
if(valorPagoAnual<deuda){
    return valorPagoAnual;
}
else{
   return Math.round(deuda+interesAnual);
}
}

function calcularInteres(deuda) {
  let capital = [400000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000];
  let calculoAmortizacion = {
    pagoInteresAnual: [],
    pagoACapital: capital,
    interes: 0.085,
    deudaInicial: [deuda],
    pagosAnuales: [0],
    saldo: 0,
    periodos: 6,
  };

  //cambiar por while
  let i = 0;
  while(  calculoAmortizacion.deudaInicial[i]>0){
      debugger;
            calculoAmortizacion.pagoInteresAnual[i] = calculoAmortizacion.deudaInicial[i] * calculoAmortizacion.interes;
            calculoAmortizacion.pagoACapital[i] = capital[i];
            calculoAmortizacion.pagosAnuales[i] = ChecarMontoInicial(calculoAmortizacion.deudaInicial[i],Math.round(calculoAmortizacion.pagoInteresAnual[i]+calculoAmortizacion.pagoACapital[i]),calculoAmortizacion.pagoInteresAnual[i]);
            calculoAmortizacion.deudaInicial[i+1] =calculoAmortizacion.deudaInicial[i] - calculoAmortizacion.pagoACapital[i];
            i++;
  };

  return calculoAmortizacion;
}

function CalculoHipotecario() {
  const data = { deuda:247608 };//247608, 1030000 
  
  let Amortizacion = calcularInteres(data.deuda);

  return (
    <div className=" CalculoHipotecarioCont table-responsive">
      <table className="table table-striped table-bordered table-sm">
        <thead className="thead-dark">
          <tr>
            <td colSpan="5">Calculo de la deuda con el BANORTE 8.5%</td>
          </tr>
          <tr>
            <td> Periodo Anual</td>
            <td> Deuda inicial</td>
            <td> Interes anual</td>
            <td> Pago a Capital</td>
            <td> Pago Total Anual</td>
            <td> Pago Mensual</td>
          </tr>
        </thead>
        <tbody>
          <TablaAmortizacion data={Amortizacion}></TablaAmortizacion>
          
        </tbody>
      </table>
    </div>
  );
}

export default CalculoHipotecario;
