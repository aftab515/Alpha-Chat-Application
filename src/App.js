import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// eslint-disable-next-line no-unused-vars
const projectID = '43132791-a6a8-4aba-b817-eb19150d9462';

const App = () => {
  if (!localStorage.getItem('Aftab Sadiq')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="43132791-a6a8-4aba-b817-eb19150d9462"
      userName={localStorage.getItem('Aftab Sadiq')}
      userSecret={localStorage.getItem('123123')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
