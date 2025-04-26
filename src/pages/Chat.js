import { useState, useEffect } from 'react';
import ChatThreads from '../components/ChatThreads';
import ChatBox from '../components/ChatBox';

export default function Chat() {
  const [threads, setThreads] = useState(() => {
    const saved = localStorage.getItem('threads');
  if (saved) return JSON.parse(saved);

  // If nothing in localStorage, create some dummy chats
  return [
    {
      id: 'thread-1',
      name: 'Alice Johnson',
      messages: [
        { sender: 'student', text: 'Hi, I need help with my course enrollment.', timestamp: '2025-04-26T09:00:00Z' },
        { sender: 'advisor', text: 'Sure Alice, let me guide you.', timestamp: '2025-04-26T09:05:00Z' }
      ]
    },
    {
      id: 'thread-2',
      name: 'Bob Smith',
      messages: [
        { sender: 'student', text: 'Can I change my course later?', timestamp: '2025-04-25T14:20:00Z' },
        { sender: 'advisor', text: 'Yes, Bob. You can change within the first 2 weeks.', timestamp: '2025-04-25T14:25:00Z' }
      ]
    }
  ];
  });

  const [currentThreadId, setCurrentThreadId] = useState(null);

  useEffect(() => {
    localStorage.setItem('threads', JSON.stringify(threads));
  }, [threads]);

  const currentThread = threads.find(thread => thread.id === currentThreadId);

  return (
    <div
  style={{
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    height: '80vh',
    padding: '20px',
    gap: '20px'
  }}
>
  <ChatThreads threads={threads} setCurrentThreadId={setCurrentThreadId} />
  <ChatBox thread={currentThread} setThreads={setThreads} threads={threads} />
</div>

  );
}
