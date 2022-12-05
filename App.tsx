import * as React from 'react';
import Conversation from './src/screens/Conversation';

const App: React.FC = () => {
  React.useEffect(() => {
    console.disableYellowBox = true;
  });

  return <Conversation />;
};

export default App;
