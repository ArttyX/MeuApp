import { View, Text, Image, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface SectionProps {
  imageSource: any; 
  text: string;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export default function Section({ imageSource, text, imageStyle, textStyle, containerStyle }: SectionProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={imageSource} style={[styles.image, imageStyle]} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%', 
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain', 
  },
  text: {
    fontSize: 16,
    flexShrink: 1, 
  },
});

