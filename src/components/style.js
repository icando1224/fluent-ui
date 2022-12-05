import styled from 'styled-components';

const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
`;

const IconButton = styled.TouchableOpacity`
  width: 30px;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

const ProgressBarContainer = styled.View`
  width: 70%;
  height: 6px;
  border-radius: 10px;
  background-color: #cdd2d6;
  margin-left: 20px;
  margin-right: 20px;
`;
const ProgressBar = styled.View`
  height: 6px;
  border-radius: 10px;
  background-color: #40cc1d;
`;

const ConversationContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 15px;
  padding: 20px 20px;
  margin-top: 20px;
  background-color: #000;
`;

const ConversationHeader = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #e6e6e6;
  margin-left: 10px;
`;

const Translation = styled.Text`
  font-size: 13px;
  color: grey;
  text-align: center;
`;
const ConversationResponseContainer = styled.View`
  position: absolute;
  background-color: #fff;
  bottom: 100px;
  width: 90%;
  align-self: center;
  padding: 40px 0px;
  border-radius: 15px;
  elevation: 1;
`;
const MicButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: blue;
  align-self: center;
  position: absolute;
  bottom: -30px;
`;

const SuccessContainer = styled.View`
  background-color: #d0efd4;
  width: 70%;
  align-self: center;
  border-radius: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
`;
const SuccessScore = styled.View`
  background-color: #05aa1f;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  position: absolute;
  top: -40px;
  align-self: center;
  border: 10px solid #fff;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: #1e1f27;
  position: absolute;
  bottom: 30px;
  align-self: center;
  padding: 10px 25px;
  border-radius: 20px;
`;
export {
  HorizontalContainer,
  IconButton,
  ProgressBarContainer,
  ProgressBar,
  ConversationContainer,
  ConversationHeader,
  Translation,
  ConversationResponseContainer,
  MicButton,
  SuccessContainer,
  SuccessScore,
  Button,
};
