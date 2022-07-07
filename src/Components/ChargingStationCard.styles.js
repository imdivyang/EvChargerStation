import {StyleSheet} from 'react-native';
import {Colors} from '../Utils/Colors';
import {horizontalScale, verticalScale} from '../Utils/Matrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselCard: {
    backgroundColor: Colors.Primary,
    borderRadius: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    marginLeft: 0,
    marginRight: 0,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.9,
  },
  title: {
    fontSize: verticalScale(12),
    color: Colors.white,
    textTransform: 'uppercase',
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: verticalScale(10),
    color: Colors.lightWhite,
  },
  kmText: {
    fontSize: verticalScale(10),
    color: Colors.pink,
    marginLeft: horizontalScale(5),
  },
  navigationIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
  connectorTitleText: {
    fontSize: verticalScale(11),
    color: Colors.sync,
    marginTop: verticalScale(10),
    fontWeight: '500',
  },
  conectorTypesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  conectorDetailContainer: {
    marginLeft: horizontalScale(8),
  },
  conectorDetailTitle: {
    fontSize: verticalScale(12),
    color: Colors.white,
  },
  connectorDetailSubTitle: {
    fontSize: verticalScale(10),
    color: Colors.sync,
  },
  chargingSpeed: {
    fontSize: verticalScale(15),
    color: Colors.white,
    textAlign: 'right',
    marginLeft: horizontalScale(40),
  },
  downArrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
});
