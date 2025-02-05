function DessertsList(props) {

    const topDessert = props.desserts // ASIGNANDO EL VALOR DEL PROP EN EL APP LLAMADO desserts
    .filter(dessert => dessert.calories < 500) // DADO QUE SE HACE UN FILTRO EN LAS INDICACIONES, SIEMPRE LOS FILTROS SE REALIZAR ANTES DE LA FUNCION MAP
    .sort((a,b) => b.calories - a.calories) // ORDENANDO DE MAYOR A MENOR USANDO LA FUNCION SORT
    .map(topdesserts => ( // FINALMENTE SE REALIZA LA EXTRACCION DE LA INFORMACION Y EN ESTE CASO REALIZAMOS EN UNA LISTA
      <li>{`${topdesserts.name} - ${topdesserts.calories}`}</li>
    ));

  return(

      <ol>
          {topDessert}
      </ol>
  
  );
}
export default DessertsList;
