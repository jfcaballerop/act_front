import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {Row, Col, Preloader} from 'react-materialize'
import './index.css';

const coords = {
  lat: 40.0000000,
  lng: -4.0000000
}

const params = {v: '3.exp', key: 'AIzaSyCbW4EbkDkwkbO8y1j02z-YRpFDzrwJ6Nw'};

class Maps extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        rendermap: false
      }
    }

    componentWillMount(){
      this.setState({rendermap:true})
    }

	  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }


	render() {
    if(this.state.rendermap){
      return (
        <Gmaps className="gmaps"
          width={'800px'}
          height={'600px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={7}
          params={params}
          onMapCreated={this.onMapCreated}>
        </Gmaps>
      );
    }else{
      return(
        <Row>
          <Col s={4}>
            <Preloader className="spinner-map-gif" size='big' color="red"/>
          </Col>
        </Row>
        )
    }
	}
}


export default Maps;