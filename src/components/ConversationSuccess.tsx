import React from 'react';
import {ConversationOneProps} from './types';
import {StyleSheet, Image, Dimensions, View, Text} from 'react-native';
import {
  ConversationResponseContainer,
  ConversationHeader,
  Translation,
  IconButton,
  SuccessContainer,
  SuccessScore,
  Button,
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
const deviceWidth = Dimensions.get('screen').width;
const ConversationSuccess: React.FC<ConversationOneProps> = ({
  header,
  translation,
}) => {
  return (
    <View style={styles.cover}>
      <ConversationResponseContainer>
        <Image source={require('../assets/shape2.png')} style={styles.shape} />
        <Image
          source={require('../assets/confetti.png')}
          style={styles.confetti}
          resizeMode="contain"
        />
        <SuccessScore>
          <Text style={styles.score}>A+</Text>
        </SuccessScore>
        <IconButton style={styles.bookmarkIcon}>
          <FontAwesomeIcon icon={faBookmark} color="#CBCBCB" />
        </IconButton>
        <ConversationHeader style={styles.colorGreen}>
          {header}
        </ConversationHeader>
        <SuccessContainer>
          <Translation style={[styles.topMargin, {...styles.colorGreen}]}>
            {translation}
          </Translation>
        </SuccessContainer>
      </ConversationResponseContainer>
      <Image
        source={require('../assets/greenGradient.png')}
        style={styles.gradient}
      />
      <Button>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
  colorGreen: {
    color: '#05AA1F',
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  topMargin: {
    marginTop: 5,
  },
  bottomMargin: {
    marginBottom: 20,
  },
  shape: {
    position: 'relative',
    top: -51,
    width: 88.5,
    height: 12.5,
    alignSelf: 'center',
    left: -3,
  },
  gradient: {
    width: deviceWidth,
    height: 300,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
    elevation: 0,
  },
  audioWave: {
    width: '80%',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  score: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  confetti: {
    width: '100%',
    position: 'absolute',
    height: 100,
    top: -65,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export {ConversationSuccess};
