import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=da78c92a761f8c4a50e5e6bcd5b1c51c&units=metric")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.list.map(data => (
      {
        dt_txt: `${data.dt_txt}`,
        temp: `${data.main.temp}`,
        temp_min: `${data.main.temp_min}`,
        temp_max: `${data.main.temp_max}`,
        weather: `${data.weather[0].main}`,
        

      }
    )))
    .then(items => this.setState({
      items,
      isLoaded: false
    }))
    .catch(error => console.log('parsing failed', error))
  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <h1 className="text-center">Prakiraan Cuaca Yogyakarta</h1>
        <table className="table table-bordered" border="1">
          <thead>
            <tr>
              <th scope="col">Datetime</th>
              <th scope="col">Temp</th> 
              <th scope="col">Temp Min</th>
              <th scope="col">Temp Max</th>
              <th scope="col">Weather</th>
            </tr>
          </thead>
          <tbody>
            {
              items.length > 0 ? items.map(item => {
                const {dt_txt,temp,temp_min,temp_max,weather} = item;
                return (
                  <tr key={dt_txt}>
                    <th scope="row">
                      {dt_txt}
                    </th>
                    <td>
                      {temp}
                    </td>
                    <td>
                      {temp_min}
                    </td>
                    <td>
                      {temp_max}
                    </td>
                    <td>
                      {weather}
                    </td>
                  </tr>  
                );
              }) : null
            }
          </tbody>  
        </table>
      </div>
    );
  }
}

export default Home;
