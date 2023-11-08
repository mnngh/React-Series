import { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div
        className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        Hello world
      </div>
      <div className='fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0 bg-red-950 font-black'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'olive' }}
            onClick={() => setColor('olive')}
          >
            Olive
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'gray' }}
            onClick={() => setColor('gray')}
          >
            Gray
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor('pink')}
          >
            Pink
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'purple' }}
            onClick={() => setColor('purple')}
          >
            Purple
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'lavender' }}
            onClick={() => setColor('lavender')}
          >
            Lavender
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-black font-black shadow-xl'
            style={{ backgroundColor: 'white' }}
            onClick={() => setColor('white')}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
