import React from "react";

// functionChecarDeudaInicial(pagoACapital, deudaInicial){
//     if(pagoACapital>deudaInicial){
//         return deudaInicial
//     }
//     else{
//         return pagoACapital;
//     }
// }

// function CalculaSumaPeriodos(Amortizacion) {
//   let Sumatoria = [0, 0, 0, 0, 0];
//   let periodos=Amortizacion.pagoInteresMensual.length;

//   for (let i = 0; i<periodos; i++) {
      
//     Sumatoria[0] = periodos;
//     Sumatoria[1] = "Totales:";
//     Sumatoria[2] += Math.round(Amortizacion.pagoInteresMensual[i],2);
//     Sumatoria[3] += Math.round(Amortizacion.comisionFPP[i],2);
//     Sumatoria[4] += Math.round(Amortizacion.comisionCA[i],2);
//     Sumatoria[3] += Math.round(Amortizacion.pagoMensualidaRetenida[i],2);
//     Sumatoria[3] += Math.round(Amortizacion.pagoAportPatronal[i],2);
//     Sumatoria[3] += Math.round(Amortizacion.pagoComlementario[i],2);
//     Sumatoria[3] +=Amortizacion.pagoMensualTotal[i];//ChecarDeudaInicial(Math.round(Amortizacion.pagoACapital[i]), Amortizacion.deudaInicial[i]);
//     Sumatoria[4] += Math.round(Amortizacion.pagosAnuales[i],2);
//   }

 

//   return Sumatoria;
// }

// function EscribirSumatoriasTabla(Sumatoria) {
//   let Totales = [];

//   Totales.push(
//     <tr key={456}>
//       <td> {"Total de "+Sumatoria[0]+" años"}</td>
//       <td> {Sumatoria[1]}</td>
//       <td> {"$"+Sumatoria[2]}</td>
//       <td> {"$"+Sumatoria[3]}</td>
//       <td> {"$"+Sumatoria[4]}</td>
//     </tr>
//   );

//   return Totales;
// }

function TablaAmortizacionInfonavit(props) {
  let Amortizacion = props.data;
  let rows = [];
  //let sumatoria = [];
  let totales = [];
  
  //const [tabla, setTabla] = useState([]);

  for (let i = 0; Amortizacion.deudaInicial[i]>0; i++) {
    let numeroPeriodo=i+1;
    if (i%12===0){
      rows.push(
      <tr>
        <td colSpan="11">{"-----------------------"+(i/12)+" año(s)---------------------------"}</td>
      </tr>
      );
    }
    rows.push(
      <tr key={i}>
        <td> {numeroPeriodo}</td>
        <td> {"$" + Amortizacion.deudaInicial[i]}</td>
        <td> {"$" + Math.round(Amortizacion.pagoInteresMensual[i])}</td>
        <td> {"$" + Amortizacion.comisionFPP[i]}</td>
        <td> {"$" + Amortizacion.comisionCA[i]}</td>
        <td> {"$" + Amortizacion.pagoMensualidaRetenida[i]}</td>
        <td> {"$" + Amortizacion.pagoAportPatronal[i]}</td>
        <td> {"$" + Amortizacion.pagoComplementario[i]}</td>
        <td> {"$" + Amortizacion.cargos[i]}</td>
        <td> {"$" + Amortizacion.abonos[i]}</td>
        <td> {"$" +Amortizacion.pagoMensualTotal[i]}</td>
      </tr>
      
    );

  
  //sumatoria = CalculaSumaPeriodos(Amortizacion);
  //totales = EscribirSumatoriasTabla(sumatoria);
   
  }
  rows.push(totales);

  return rows;
}

export default TablaAmortizacionInfonavit;
