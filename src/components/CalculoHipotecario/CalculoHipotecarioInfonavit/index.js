import React from "react";
import TablaAmortizacion from "../CalculoHipotecarioInfonavit/TablaAmortizacionInfonavit";

//Comisiones
function setValoresCFPP(periodos){
  let datos=new Array(periodos);
  //valor de la comision para proteccion pagos de 50.74
  return datos.fill(50.74);
  
}
function setValoresCCA(periodos){
  let datos=new Array(periodos);
  //valor de la comision admistriva 206
  return datos.fill(206);
}
//capital y aportaciones

function setValoresCapital(periodos){
  //[60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000,60000];
  let datos=new Array(periodos);
  //valor de la comision para proteccion pagos de 50.74
  return datos.fill(8000);
}
function setValoresAportacionPatronal(periodos){
  //[2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26,2299.26]
  let datos=new Array(periodos);
  //valor de la comision para proteccion pagos de 50.74
  return datos.fill(2299.26);
}
function setValoresPComplementario(periodos){
  let datos=new Array(periodos);
  //valor del pago complementario
  return datos.fill(0);
}

function SaldoActualizado( abonos, cargos,deudaInicial, periodo) {
  
  if (periodo>=43){
    //debugger;
  }
  let pagoreal=abonos-cargos;
  if (pagoreal < deudaInicial) {
    return Math.round(deudaInicial-pagoreal);
  } else {
    return Math.round(deudaInicial + cargos);
  }
}

function calcularAmortizacion(deuda) {
  //asumimos que ya dimos un enganche de 400mil
  //se asume que cada mes nos calcula un 1% de interes sobre la deuda, asi anualmente habremos pagado el 12%

  let periodos= 154;
  let capital = setValoresCapital(periodos);
  let aportacionPatronal = setValoresAportacionPatronal(periodos);
  //comision fondo de proteccion de pagos, te lo rembolsan ?
  let valoresComisionFPP = setValoresCFPP(periodos);
  //comision administrativa, va decresiendo pero nose como se calcula
  let valoresComisionCA  = setValoresCCA(periodos);
  let valoresPComplementario=setValoresPComplementario(periodos);

  let amortizacion = {
    pagoInteresMensual: [],
    pagoMensualidaRetenida: capital,
    comisionFPP:valoresComisionFPP,
    comisionCA:valoresComisionCA,
    pagoAportPatronal: aportacionPatronal,
    pagoComplementario:valoresPComplementario,
    tasaInteres: 0.01,
    deudaInicial: [deuda],
    pagoMensualTotal: [0],
    cargos:[],
    abonos:[],
    periodos: 154,
  };

  //cambiar por while
  let i = 0;
  //let salir =false;
  while (amortizacion.deudaInicial[i] > 0 ) {
   
    amortizacion.pagoInteresMensual[i] =
    amortizacion.deudaInicial[i] * amortizacion.tasaInteres;

    amortizacion.pagoMensualidaRetenida[i] = capital[i];

    //cargos
    amortizacion.cargos[i]=Math.round(amortizacion.comisionCA[i]+amortizacion.comisionFPP[i]
      +amortizacion.pagoInteresMensual[i]);
    //abonos
    amortizacion.abonos[i]=amortizacion.pagoMensualidaRetenida[i]+amortizacion.pagoAportPatronal[i];
    let saldoAct=SaldoActualizado(amortizacion.abonos[i],
      amortizacion.cargos[i], amortizacion.deudaInicial[i],i);

    if(saldoAct > amortizacion.deudaInicial[i]){
      amortizacion.deudaInicial[i]=0;
      break;
    }
    else{
      amortizacion.pagoMensualTotal[i] = saldoAct;
    }
   
    //....tengo que poner cargos y abonos en la funcion ede pagosRealizados()
    amortizacion.deudaInicial[i + 1] = amortizacion.pagoMensualTotal[i];
    i++;
  }

  return amortizacion;
}

function CalculoHipotecarioInfonavit() {
  const data = { deuda: 351426 }; //247608, 1030000 ,247608

  let Amortizacion=calcularAmortizacion(data.deuda);

  return (
    <div className=" InfonavitCont table-responsive">
      <table className="table table-striped table-bordered table-sm">
        <thead className="thead-dark">
          <tr>
            <td colSpan="11">Calculo de la deuda con el INFONAVIT 12%</td>
          </tr>
          <tr>
            <td> Periodo Mensual</td>
            <td> Deuda inicial</td>
            <td> Interes mensual 1\%</td>
            <td> Comisiones FPP</td>
            <td> Comisiones CA</td>
            <td> Retencion Mensual</td>
            <td> Retencion Patronal</td>
            <td> Pago Complementario</td>
            <td>Cargos</td>
            <td>Abonos</td>
            <td> Saldo Final</td>
          </tr>
        </thead>
        <tbody>
          <TablaAmortizacion data={Amortizacion}></TablaAmortizacion>
        </tbody>
      </table>
    </div>
  );
}

export default CalculoHipotecarioInfonavit;
