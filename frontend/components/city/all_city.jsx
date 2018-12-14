import React from 'react';
// import { Link } from 'react-router-dom';


class AllCities extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchCities();
      }

  render() {
    let cities = this.props.cities.map(city =>{
      <li>{city}</li>
    })
    return (
      <div>
          Hola
        <ul>{cities}</ul>
      </div>
    );
  }
}

export default AllCities;

