import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SvgImage, SvgLine} from '../../src/img/svgIcons';
import {svgPath} from '../../services/utils/svgPaths';
import ImagePicker from 'react-native-image-picker';
import MainHeader from '../../components/mainHeader';
import {styles} from './styles';
import {image} from '../../src/img';

const MainScreen = () => {
  const [photo, setPhoto] = useState(image.NO_AVATAR);
  const name = 'Javid Hakhizade';
  const data = [
    'Date:',
    '12.01.1995',
    'Courses:',
    'DevEducation',
    'E-mail:',
    'cavid.haxizade@gmail.com',
    'Phone-number:',
    '+994703177131',
    'Status:',
    'Mobile Developer',
  ];
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto({uri: response.uri});
      }
    });
  };
  return (
    <>
     <MainHeader />
      <View style={styles.background}>
        <SvgImage path={svgPath.background} />
      </View>
      <View style={styles.container}>
          <TouchableOpacity
            onPress={() => handleChoosePhoto()}
            style={styles.userImageContainer}>
            <Image style={styles.userImage} source={photo} />
          </TouchableOpacity>
        <View style={styles.authBox}>
          <Text style={styles.userText}>{name}</Text>
          <SvgLine />
          <ScrollView contentContainerStyle={{ alignItems: 'center'}}>
            {data.map((item, index) => {
              return (
                <Text style={styles.dataText} key={index}>
                  {item}
                </Text>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default MainScreen;
