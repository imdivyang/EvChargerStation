import {Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Data, MAP_STYLE} from '../../Utils';
import {styles} from './Home.styles';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {Icons} from '../../Assets/Images';
import {Colors} from '../../Utils/Colors';
import ChargingStationCard from '../../Components/ChargingStationCard';
import GetLocation from 'react-native-get-location';

const Home = () => {
  const [initialRegion, setInitialRegion] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.09,
    longitudeDelta: 0.02,
  });
  const [currentLocation, setCurrentlocation] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    currentLatLong();
  }, []);

  const currentLatLong = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        let obj = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.522,
          longitudeDelta: 0.15,
        };
        setCurrentlocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        setInitialRegion(obj);
      })
      .catch(_err => {});
  };

  return (
    <View style={styles.container}>
      <MapView
        region={initialRegion}
        customMapStyle={MAP_STYLE}
        style={styles.container}>
        {Data.map((e, index) => {
          return (
            <Marker
              key={e.id}
              coordinate={{
                latitude: e?.latitude ? e?.latitude : 0,
                longitude: e?.longitude ? e?.longitude : 0,
              }}>
              <View style={styles.chargerStationMarkerContainer}>
                <Text style={styles.text}>{index + 1}</Text>
              </View>
            </Marker>
          );
        })}
        <Marker coordinate={currentLocation}>
          <View style={styles.currentlocationMArker}>
            <FastImage
              source={Icons.gps}
              style={styles.gpsIcon}
              tintColor={Colors.white}
            />
          </View>
        </Marker>
      </MapView>
      <View style={styles.headreContainer}>
        <FastImage
          source={Icons.menu}
          style={styles.menuIcon}
          resizeMode="contain"
          tintColor={Colors.Primary}
        />
        <View style={styles.SerachBarContainer}>
          <FastImage
            source={Icons.circle}
            style={{height: 10, width: 10}}
            resizeMode="contain"
            tintColor={Colors.sync}
          />
          <TextInput
            placeholder="Search for thr compatible chargers"
            placeholderTextColor={Colors.white}
            style={styles.serchInput}
          />
          <FastImage
            source={Icons.setting}
            style={styles.filterIcon}
            resizeMode="contain"
            tintColor={Colors.sync}
          />
        </View>
      </View>
      <View style={styles.bottomStationContainer}>
        <Carousel
          data={Data}
          renderItem={({item}) => <ChargingStationCard item={item} />}
          sliderWidth={400}
          itemWidth={200}
          layout={'default'}
          layoutCardOffset={0}
        />
      </View>
    </View>
  );
};
export default Home;
