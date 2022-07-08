import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/Colors';
import {horizontalScale, verticalScale} from '../../Utils/Matrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomStationContainer: {
    position: 'absolute',
    bottom: verticalScale(20),
    zIndex: 999,
  },
  headreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    top: verticalScale(20),
    left: horizontalScale(20),
  },
  menuIcon: {
    height: verticalScale(25),
    width: verticalScale(35),
  },
  SerachBarContainer: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: horizontalScale(10),
    borderRadius: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: '82%',
    marginLeft: verticalScale(10),
  },
  serchInput: {
    marginLeft: horizontalScale(10),
    fontSize: verticalScale(13),
    flex: 1,
    paddingVertical: 8,
    color: Colors.white,
  },
  filterIcon: {
    height: verticalScale(25),
    width: verticalScale(25),
    marginLeft: horizontalScale(20),
  },
  chargerStationMarkerContainer: {
    backgroundColor: Colors.sync,
    height: verticalScale(30),
    width: verticalScale(30),
    borderRadius: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  currentlocationMArker: {
    backgroundColor: Colors.pink,
    height: verticalScale(32),
    width: verticalScale(32),
    borderRadius: verticalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gpsIcon: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
  popOverStyle: {
    backgroundColor: Colors.Primary,
    borderRadius: verticalScale(10),
  },
  screenshotBtn: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    width: verticalScale(150),
  },
  takeSceernShotText: {
    fontSize: verticalScale(16),
    fontWeight: 'bold',
    color: Colors.sync,
  },
});
