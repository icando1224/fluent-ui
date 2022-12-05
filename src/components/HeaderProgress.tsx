import React from 'react';
import {HeaderProgressProps} from './types';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes, faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  HorizontalContainer,
  IconButton,
  ProgressBarContainer,
  ProgressBar,
} from './style';
const HeaderProgress: React.FC<HeaderProgressProps> = ({
  progress,
  onCloseAction,
  onOptionsClick,
}) => {
  return (
    <HorizontalContainer style={styles.container}>
      <IconButton onPress={onCloseAction}>
        <FontAwesomeIcon icon={faTimes} color="#000" size={30} />
      </IconButton>
      <ProgressBarContainer>
        <ProgressBar style={{width: `${progress}%`}} />
      </ProgressBarContainer>
      <IconButton onPress={onOptionsClick}>
        <FontAwesomeIcon icon={faEllipsisH} color="#000" size={30} />
      </IconButton>
    </HorizontalContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export {HeaderProgress};
