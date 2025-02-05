function DessertsList(props) {
    const topDessert = props.desserts
    .filter(dessert => dessert.calories < 500)
    .sort((a,b) => b.calories - a.calories)
    .map(topdesserts => (
      <li>{topdesserts.name}</li>
    ));
  return(

      <ul>
          {topDessert}
      </ul>
  
  );
}
export default DessertsList;
