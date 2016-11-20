import Reactfrom 'react';
import { Image } from 'react-native';

const SplashImageContainer = (props) => {
  const { splash } = styles;

  return (
    <Image source={require('../assets/images/sage-bg.jpg')} style={splash}>
      {props.children}
    </Image>
  );
};

const styles = {
  splash: {
    backgroundColor: 'transparent',
    flex: 1,
    height: undefined,
    width: undefined
  }
};

export default SplashImageContainer;
