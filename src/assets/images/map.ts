import {ImageSourcePropType} from 'react-native';

interface ImageType {
  placeholder: ImageSourcePropType;
  back: ImageSourcePropType;
}

const Images: ImageType = {
  placeholder: require('./placeHolder_img.png'),
  back: require('./back.png'),
};
export default Images;
