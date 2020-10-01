import React from "react";

function ChecarAportacionCapital(pagoACapital, deudaInicial){
    if(pagoACapital>deudaInicial){
        return deudaInicial
    }
    else{
        return pagoACapital;
    }
}

function CalculaSumaPeriodos(Amortizacion) {
  let Sumatoria = [0, 0, 0, 0, 0];
  let periodos=Amortizacion.pagoInteresAnual.length;

  for (let i = 0; i<periodos; i++) {
      
    Sumatoria[0] = periodos;
    Sumatoria[1] = "Totales:";
    Sumatoria[2] += Math.round(Amortizacion.pagoInteresAnual[i],2);
    Sumatoria[3] += ChecarAportacionCapital(Math.round(Amortizacion.pagoACapital[i]), Amortizacion.deudaInicial[i]);
    Sumatoria[4] += Math.round(Amortizacion.pagosAnuales[i],2);
  }

 

  return Sumatoria;
}

function EscribirSumatoriasTabla(Sumatoria) {
  let Totales = [];

  Totales.push(
    <tr key={456}>
      <td> {"Total de "+Sumatoria[0]+" años"}</td>
      <td> {Sumatoria[1]}</td>
      <td> {"$"+Sumatoria[2]}</td>
      <td> {"$"+Sumatoria[3]}</td>
      <td> {"$"+Sumatoria[4]}</td>
    </tr>
  );

  return Totales;
}

function TablaAmortizacion(props) {
  let Amortizacion = props.data;
  let rows = [];
  let sumatoria = [];
  let totales = [];
  
  //const [tabla, setTabla] = useState([]);

  for (let i = 0; Amortizacion.deudaInicial[i]>0; i++) {
      let numeroPeriodo=i+1;
    rows.push(
      <tr key={i}>
        <td> {numeroPeriodo}</td>
        <td> {"$" + Amortizacion.deudaInicial[i]}</td>
        <td> {"$" + Math.round(Amortizacion.pagoInteresAnual[i])}</td>
        <td> {"$" + ChecarAportacionCapital(Amortizacion.pagoACapital[i], Amortizacion.deudaInicial[i])}</td>
        <td> {"$" + Amortizacion.pagosAnuales[i]}</td>
        <td> {"$" + Math.round(Amortizacion.pagosAnuales[i]/12)}</td>
      </tr>
      
    );
  sumatoria = CalculaSumaPeriodos(Amortizacion);
  totales = EscribirSumatoriasTabla(sumatoria);
   
  }
  rows.push(totales);

  return rows;
}

export default TablaAmortizacion;
