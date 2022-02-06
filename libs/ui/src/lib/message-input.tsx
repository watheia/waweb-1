import { HtmlHTMLAttributes, KeyboardEvent, useState } from 'react';

export interface MessageInputProps
  extends Omit<HtmlHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  onSubmit: (msg: string) => void;
}

const MessageInput = ({ onSubmit }: MessageInputProps) => {
  const [messageText, setMessageText] = useState('');

  const submitOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    // Watch for enter key
    if (event.keyCode === 13) {
      onSubmit && onSubmit(messageText);
      setMessageText('');
    }
  };

  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Send a message"
      value={messageText}
      onChange={(e) => setMessageText(e.target.value)}
      onKeyDown={(e) => submitOnEnter(e)}
    />
  );
};

export default MessageInput;
