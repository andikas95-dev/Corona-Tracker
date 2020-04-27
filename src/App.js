import React, { Component } from 'react';
import styles from './App.module.css'
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'

import coronaImage from './images/corona-logo.png'

export default class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  }

  render() {

    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Logo Corona" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}