import {Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState, version} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Data, MAP_STYLE} from '../../Utils';
import {styles} from './Home.styles';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {Icons} from '../../Assets/Images';
import {Colors} from '../../Utils/Colors';
import ChargingStationCard from '../../Components/ChargingStationCard';
import GetLocation from 'react-native-get-location';
import {uploadFile} from '../../Utils/helper';
import ViewShot from 'react-native-view-shot';
import Popover from 'react-native-popover-view';
import {horizontalScale, verticalScale} from '../../Utils/Matrics';
const Home = () => {
  const viewShotRef = useRef(null);
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
  const [showPopOver, setShowPopOver] = useState(false);

  useEffect(() => {
    currentLatLong();
  }, []);

  const uploadSreenshot = async () => {
    const result = await viewShotRef.current.capture();
    console.log(result);
    const data = await fetch(result);
    const blob = await data.blob();
    console.log('Blob', blob);
    const file = new File([blob], 'Screen');
    console.log('file', file);
    const obj = {
      file: blob,
    };
    setShowPopOver(false);
    alert('Screen Shot Save Successfully');
    uploadFile(obj)
      .then(res => {
        console.log('rsesponse', res);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
    <ViewShot
      ref={viewShotRef}
      style={{flex: 1}}
      options={{format: 'jpg', quality: 0.9}}>
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
          <Popover
            isVisible={showPopOver}
            popoverStyle={styles.popOverStyle}
            onRequestClose={() => {
              setShowPopOver(false);
            }}
            from={
              <TouchableOpacity onPress={() => setShowPopOver(true)}>
                <FastImage
                  source={Icons.menu}
                  style={styles.menuIcon}
                  resizeMode="contain"
                  tintColor={Colors.Primary}
                />
              </TouchableOpacity>
            }>
            <TouchableOpacity
              style={styles.screenshotBtn}
              onPress={() => {
                uploadSreenshot();
              }}>
              <Text style={styles.takeSceernShotText}>Take a Screen Shot</Text>
            </TouchableOpacity>
          </Popover>

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
    </ViewShot>
  );
};
export default Home;
