import { useState } from 'react';


export default function ChatBox({ thread, setThreads, threads }) {
    const [newMessage, setNewMessage] = useState('');
  
    if (!thread) {
      return (
        <div style={{ width: '70%', padding: '10px' }}>
          <h3>Select a chat to start messaging</h3>
        </div>
      );
    }
  
    const handleSend = () => {
      if (!newMessage.trim()) return;
  
      const updatedThreads = threads.map(t => {
        if (t.id === thread.id) {
          return {
            ...t,
            messages: [...t.messages, { sender: 'advisor', text: newMessage, timestamp: new Date().toISOString() }]
          };
        }
        return t;
      });
  
      setThreads(updatedThreads);
      setNewMessage('');
    };
  
    return (
      <div style={{ width: '70%', padding: '10px' }}>
        <h3>Chat with {thread.name}</h3>
        <div style={{ height: '300px', overflowY: 'auto', marginBottom: '10px', border: '1px solid lightgray', padding: '10px' }}>
          {thread.messages.map((msg, index) => (
            <div key={index} style={{ textAlign: msg.sender === 'advisor' ? 'right' : 'left', marginBottom: '10px' }}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
  
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ width: '80%', marginRight: '10px' }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    );
  }
  