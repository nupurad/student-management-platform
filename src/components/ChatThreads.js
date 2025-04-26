export default function ChatThreads({ threads, setCurrentThreadId }) {
    return (
      <div style={{ width: '30%', borderRight: '1px solid gray', padding: '10px' }}>
        <h3>Threads</h3>
        {threads.length === 0 ? (
          <p>No chats available.</p>
        ) : (
          threads.map(thread => (
            <div key={thread.id} onClick={() => setCurrentThreadId(thread.id)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
              {thread.name}
            </div>
          ))
        )}
      </div>
    );
  }
  