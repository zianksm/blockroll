import React from 'react';

interface ChatProps {
  icon: string;
  topics: string;
  chat: string;
  time: string;
  notif: string;
  index: number;
  sender: string;
}

export default function Chat(props: ChatProps) {
  const { icon, topics, chat, time, notif, index, sender } = props;
  const maxLength = 30;
  let truncatedText = sender + ': ' + chat;
  if (truncatedText.length > maxLength) {
    truncatedText = truncatedText.substring(0, maxLength) + '...';
  }

  return (
    <div className={'flex flex-row gap-2'}>
      <img
        src={icon}
        className="w-[42px] rounded-full my-auto"
        style={{ width: '42px' }}
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full my-auto gap-1">
          <p className="text-sm font-semibold">{topics}</p>
          <p className="text-xs font-normal text-[#7A7B7E]">{time}</p>{' '}
        </div>
        <div className="flex flex-row justify-between items-end gap-1 max-w-[31px}  ">
          <p className="text-xs font-normal text-[#7A7B7E] w-full max-w-[238px]">
            {truncatedText}
          </p>{' '}
          <div className="flex bg-yellow-400 max-w-[18px] rounded-full justify-center w-full ">
            <p className="text-[10px] font-normal">{notif}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
