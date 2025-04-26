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
            <div
              style={{
                width: window.innerWidth < 768 ? '100%' : '70%',
                padding: '10px'
              }}
            >
              <h3>Chat with {thread.name}</h3>
              
              <div
                style={{
                  height: '300px',
                  overflowY: 'auto',
                  marginBottom: '10px',
                  border: '1px solid lightgray',
                  padding: '10px'
                }}
              >
                {thread.messages.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                        display: 'flex',
                        justifyContent: msg.sender === 'advisor' ? 'flex-end' : 'flex-start',
                        marginBottom: '10px'
                }}
                >
    <div
      style={{
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: msg.sender === 'advisor' ? '#DCF8C6' : '#f8f8da',
        maxWidth: '70%',
        textAlign: 'left',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
    >
      {msg.text}
    </div>
  </div>
))}

              </div>
          
              {/* Wrap input and button together */}
              <div style={{ marginTop: '10px' }}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  style={{ width: '80%', height: '30px',borderRadius: '10px', marginRight: '20px', paddingLeft: '10px' }}
                />
                <button style={{padding: '10px',backgroundColor: '#4A90E2',color: 'white',border: 'none',borderRadius: '5px',cursor: 'pointer',flex: '1 1 200px',minWidth: '150px', fontFamily:'Roboto'}}
                onClick={handleSend}>
                Send
                </button>
              </div>
          
            </div>
          );
}