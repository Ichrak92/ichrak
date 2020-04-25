import React from 'react';
import {Cards , Chart , CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData} from './api'
import image from './assets/images/image.png'
import {Typography } from '@material-ui/core';

class App extends React.Component{
  
  state= {
    data: {},
    country: ''
  }
  async componentDidMount()
   {
     const data = await fetchData();
     this.setState({data })
   }

   handleCountryChange = async (country) =>{
     const fetcedhData = await fetchData(country);
     this.setState({data: fetcedhData, country: country })

   }

   render()
   { const {data , country} = this.state;
    return(
      <div className={styles.container}>
        <img src={image} alt="main_image" className={styles.image}/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      <Chart data={data} country={country}/>
      </div>
    )

   }



}

export default App;
