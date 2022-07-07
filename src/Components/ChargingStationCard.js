import {Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Icons} from '../Assets/Images';
import {styles} from './ChargingStationCard.styles';
import {Colors} from '../Utils/Colors';

const ChargingStationCard = ({item}) => {
  const converIntoKm = meter => {
    const km = meter / 1000;
    return km.toFixed(1);
  };

  const ChargingDetail = () => {
    return (
      <View style={styles.conectorTypesContainer}>
        <FastImage
          source={Icons.ev}
          style={styles.navigationIcon}
          tintColor={Colors.white}
          resizeMode="contain"
        />
        <View style={styles.conectorDetailContainer}>
          <Text style={styles.conectorDetailTitle}>Level 1 DC</Text>
          <Text style={styles.connectorDetailSubTitle}>15kW Fast Charging</Text>
        </View>
        <Text style={styles.chargingSpeed}>x2</Text>
      </View>
    );
  };

  return (
    <View style={styles.carouselCard}>
      <View style={styles.head}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{item.address}</Text>
            <Text style={styles.kmText}>{converIntoKm(item.distance)} km</Text>
          </View>
        </View>
        <FastImage
          source={Icons.navigation}
          style={styles.navigationIcon}
          tintColor={Colors.pink}
        />
      </View>
      <Text style={styles.connectorTitleText}>SUPPORTED CONNECTOR</Text>
      {ChargingDetail()}
      {ChargingDetail()}
      {ChargingDetail()}
      <View style={styles.downArrowContainer}>
        <FastImage
          source={Icons.downArrow}
          style={styles.navigationIcon}
          tintColor={Colors.white}
        />
      </View>
    </View>
  );
};

export default ChargingStationCard;
