export default function ChatThreads({ threads, setCurrentThreadId }) {
    return (
        <div
        style={{
          width: window.innerWidth < 768 ? '100%' : '30%',
          borderRight: window.innerWidth < 768 ? 'none' : '1px solid gray',
          padding: '10px'
        }}
      >
        <h3>Threads</h3>
        {threads.length === 0 ? (
          <p>No chats available.</p>
        ) : (
          threads.map(thread => (
            <div
              key={thread.id}
              onClick={() => setCurrentThreadId(thread.id)}
              style={{ cursor: 'pointer', marginBottom: '10px' }}
            >
              {thread.name}
            </div>
          ))
        )}
      </div>
      
    );
  }
  