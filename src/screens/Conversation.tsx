import * as React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import {HeaderProgress} from '../components/HeaderProgress';
import {ConversationDialog} from '../components/ConversationDialog';
import {ConversationResponseDialog} from '../components/ConversationResponseDialog';
import {ConversationSuccess} from '../components/ConversationSuccess';
import {seekPermissions} from '../utils/utils';
const duetOrdering = require('../assets/DuetOrderingCoffee_V2.mp4');

interface AudioSet {
  OutputFormatAndroid?: OutputFormatAndroidType;
  AudioEncoderAndroid?: AudioEncoderAndroidType;
  AudioSourceAndroid?: AudioSourceAndroidType;
  AVSampleRateKeyIOS?: number;
  AVNumberOfChannelsKeyIOS?: number;
  AVEncoderAudioQualityKeyIOS?: AVEncoderAudioQualityIOSType;
}

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const Conversation: React.FC = () => {
  const [appError, setAppError] = React.useState<string | null>(null);
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [showResponseDialog, setShowResponseDialog] =
    React.useState<boolean>(false);
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const videoPlayerRef = React.useRef(null);
  const audioRecorder = new AudioRecorderPlayer();

  const handleStartRecord = async (): Promise<void> => {
    try {
      await seekPermissions();

      setIsRecording(true);

      const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
      };

      // grab uri and upload recording for further processing
      const uri = await audioRecorder.startRecorder(undefined, audioSet);

      //in reality we would check if the response us correct or not for now
      //we just set the success message after 5 sec

      setTimeout(() => {
        setShowResponseDialog(false);
        setShowSuccess(true);
      }, 5000);
    } catch (error) {
      setAppError('Unable to record your answer');
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShowResponseDialog(true);
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={duetOrdering}
          paused={isRecording}
          ref={videoPlayerRef}
          fullscreen={true}
          resizeMode="cover"
          repeat={true}
          style={styles.videoFootage}
        />
      </View>
      <HeaderProgress progress={35} />
      <View style={styles.steps}>
        {!showResponseDialog && (
          <ConversationDialog
            header={'Holo como estan tu y tu familia estos dias?'}
            translation={'Hi, how are you and your family these days?'}
          />
        )}

        {showResponseDialog && (
          <ConversationResponseDialog
            header={'La estamos haciendo muy bien'}
            translation={'We are doing very well'}
            speaking={isRecording}
            onMicPress={() => handleStartRecord()}
          />
        )}
        {showSuccess && (
          <ConversationSuccess
            header="WELL DONE!"
            translation="La estamos haciendo muy bien"
          />
        )}
      </View>
      {appError && (
        <View>
          <Text>{appError}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  steps: {
    flex: 1,
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  videoFootage: {
    width: deviceWidth,
    height: deviceHeight,
  },
  step: {
    flex: 1,
  },
});
export default Conversation;
