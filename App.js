import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MapView, {Marker, enableLatestRenderer} from 'react-native-maps';
import Home from './src/Screens/Home/Home';

enableLatestRenderer();
const App = () => {
  const [region, setRegion] = React.useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const Demo = ({text1, text2}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          {/* <Icon name="close" size={20} /> */}
          <View>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
          </View>
        </View>
        <Text>2X</Text>
      </View>
    );
  };

  const Customearker = () => (
    <View>
      {/* <Image
        source={require('../try/download.png')}
        style={{width: 40, height: 40}}
      /> */}
    </View>
  );

  return (
    <Home />
    // <View
    //   style={{
    //     flex: 1,
    //   }}>
    //   <MapView
    //     initialRegion={region}
    //     onRegionChange={region => setRegion(region)}
    //     customMapStyle={mapStyle}
    //     style={{
    //       flex: 1,
    //       justifyContent: 'flex-end',
    //     }}>
    //     <Marker draggable={true} coordinate={region} pinColor="grey">
    //       <Customearker />
    //     </Marker>
    //   </MapView>

    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 14,
  },
  carouselCard: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 200,
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 16,
  },
  text2: {
    fontSize: 14,
  },
});
