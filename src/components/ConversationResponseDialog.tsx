import React from 'react';
import {ConversationResponseProps} from './types';
import {StyleSheet, Image, Dimensions, View} from 'react-native';
import {
  ConversationResponseContainer,
  ConversationHeader,
  Translation,
  HorizontalContainer,
  IconButton,
  MicButton,
} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faVolumeDown,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
const deviceWidth = Dimensions.get('screen').width;
const ConversationResponseDialog: React.FC<ConversationResponseProps> = ({
  header,
  translation,
  speaking,
  onMicPress
}) => {
  return (
    <View style={styles.cover}>
      <ConversationResponseContainer>
        <IconButton style={styles.bookmarkIcon}>
          <FontAwesomeIcon icon={faBookmark} color="#CBCBCB" />
        </IconButton>
        {speaking && (
          <Translation style={styles.bottomMargin}>Speak Now...</Translation>
        )}
        <HorizontalContainer>
          {!speaking && <FontAwesomeIcon icon={faVolumeDown} color="blue" />}
          <ConversationHeader style={styles.colorBlack}>
            {header}
          </ConversationHeader>
        </HorizontalContainer>
        {!speaking && (
          <Translation style={styles.topMargin}>{translation}</Translation>
        )}
        {!speaking && (
          <>
            <Image
              source={require('../assets/shape.png')}
              style={styles.shape}
            />
            <MicButton onPress={onMicPress}>
              <FontAwesomeIcon icon={faMicrophone} color="white" size={24} />
            </MicButton>
          </>
        )}
      </ConversationResponseContainer>
      {speaking && (
        <>
          {/* TODO: this will be changed to a LinearGradient instead of an Image */}
          <Image
            source={require('../assets/blueGradient.png')}
            style={styles.gradient}
          />
          {/* TODO: this will be change with an animating audio wave */}
          <Image
            source={require('../assets/audioWave.png')}
            style={styles.audioWave}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    flex: 1,
  },
  colorBlack: {
    color: '#000',
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
    position: 'absolute',
    bottom: -8,
    width: 85,
    height: 14,
    alignSelf: 'center',
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
});

export {ConversationResponseDialog};
