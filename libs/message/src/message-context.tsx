import { createContext, FunctionComponent, useState } from 'react';
import { MessageProps } from './types';

export type MessageContextProps = {
  messages: MessageProps[];
  handleMessage: (props: MessageProps) => void;
};

export const MessageContext = createContext<Partial<MessageContextProps>>({});

export const MessageProvider: FunctionComponent = ({ children }) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const handleMessage = (message: MessageProps) => {
    if (message.type === 'default') {
      console.log(message.message);
    } else if (message.type === 'success') {
      console.info(message.message);
    } else {
      console.error(message.message);
    }
    setMessages((prevMessages) => prevMessages.concat([message]));
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 5000);
  };

  return (
    <MessageContext.Provider value={{ messages, handleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
