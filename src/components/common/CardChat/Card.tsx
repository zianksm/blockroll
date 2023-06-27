import { FC } from 'react';
import React from 'react';

import Chat from '../Chat/Chat';
import styles from './Card.module.css';

export interface CardChatProps {
  desc: string;
  lecturer: string;
  date: string;
  time: string;
  examTime: string;
}

export default function CardChat(props: CardChatProps) {
  const chatArray = [
    {
      icon: '/assets/Icons/Profile.svg',
      topics: 'Teknik Bedah',
      chat: 'Hello, how are you?',
      time: '12:30',
      notif: '1',
      sender: 'Mikey',
    },
    {
      icon: '/assets/Icons/Profile.svg',
      topics: 'Kesehatan Masyarakat',
      chat: 'Are you interested in our latest offers?',
      time: 'Kemarin',
      notif: '3',
      sender: 'Dr Robert Downey',
    },
    {
      icon: '/assets/Icons/Profile.svg',
      topics: 'Menjadi Dokter Spesialis',
      chat: 'How can we assist you today?',
      time: '04:15',
      notif: '0',
      sender: 'Anda',
    },
  ];

  const { desc, lecturer, date, time, examTime } = props;
  return (
    <div className="flex bg-white  rounded-xl drop-shadow-lg flex-col  gap-4 h-full">
      {/* // <a href={href} className={styles.wrapper}> */}
      <div className="flex-col ">
        <div className="flex flex-col p-5 gap-4">
          {chatArray.map((chat, index) => (
            <div key={index}>
              <Chat
                index={index}
                icon={chat.icon}
                topics={chat.topics}
                chat={chat.chat}
                time={chat.time}
                notif={chat.notif}
                sender={chat.sender}
              />
              {index !== 2 && <hr className="w-full mt-4 bg-[#F3F3F3]" />}
            </div>
          ))}
        </div>
        <div className="flex flex-col border-t p-4 gap-4">
          <button className="bg-[#FFF200] w-full rounded-xl h-10">
            Buka Percakapan
          </button>
        </div>
      </div>
      {/* <p className={styles.excerpt}>{excerpt}</p> */}
      {/* </a> */}
    </div>
  );
}
