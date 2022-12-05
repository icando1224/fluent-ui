import React from 'react';
import {ConversationOneProps} from './types';
import {ConversationContainer, ConversationHeader, Translation} from './style';
const ConversationDialog: React.FC<ConversationOneProps> = ({
  header,
  translation,
}) => {
  return (
    <ConversationContainer>
      <ConversationHeader>{header}</ConversationHeader>
      <Translation>{translation}</Translation>
    </ConversationContainer>
  );
};

export {ConversationDialog};
