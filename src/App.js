import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = ({
            items: [],
            DataisLoaded: false
        })
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://www.etherchain.org/api/gasPriceOracle")
            .then((res) => res.json())
            .then((json) => {
              console.log(json)
                this.setState({
                     items: json,
                     DataisLoaded: true
                 });
                
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        //const itemss =  Object.keys(items);
        //console.log(Object.keys(itemss));

        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (

        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                Object.keys(items).map(item => (
                <ol>
                    Safe_Low: { item.safeLow }, 
                    Standard: { item.standard }, 
                    Fast: { item.fast }
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default App;