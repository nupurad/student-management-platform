import { useState, useEffect } from 'react';
import ChatThreads from '../components/ChatThreads';
import ChatBox from '../components/ChatBox';

export default function Chat() {
  const [threads, setThreads] = useState(() => {
    const saved = localStorage.getItem('threads');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentThreadId, setCurrentThreadId] = useState(null);

  useEffect(() => {
    localStorage.setItem('threads', JSON.stringify(threads));
  }, [threads]);

  const currentThread = threads.find(thread => thread.id === currentThreadId);

  return (
    <div style={{ display: 'flex', height: '80vh', padding: '20px' }}>
      <ChatThreads threads={threads} setCurrentThreadId={setCurrentThreadId} />
      <ChatBox thread={currentThread} setThreads={setThreads} threads={threads} />
    </div>
  );
}
