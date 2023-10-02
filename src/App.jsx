import { useState } from 'react';
import video from "./assets/assistant.mp4"

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [message, setMessage] = useState('Hello there and welcome, Click on or Hover over a button and see what it does');
  const [boxPosition, setBoxPosition] = useState({ top: 400, left: 10 });

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', getRandomColor()];

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeBackgroundColor = (color, message) => {
    setBackgroundColor(color);
    setMessage(message);
  };

  const handleButtonClick = (index) => {
    const color = colors[index];
    const button = document.querySelector(`#button${index}`);
    const buttonRect = button.getBoundingClientRect();
    setBoxPosition({ top: buttonRect.bottom, left: buttonRect.left });
    const message = `This button changes the background color to ${color}`;
    changeBackgroundColor(color, message);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center transition-all duration-300 relative" style={{ backgroundColor }}>
        <div className="flex items-center gap-x-[10px]">
          {colors.map((color, index) => (
            <button
              className={`px-20 py-5 rounded-lg relative border border-[${color}]`}
              key={index}
              id={`button${index}`}
              style={{ backgroundColor: color }}
              onClick={() => handleButtonClick(index)}
              onMouseEnter={() => {
                const message = `This button changes the background color to ${color}`;
                setMessage(message);
              }}
              onMouseLeave={() => {
                setMessage('Hello there and welcome, Click on or Hover over a button and see what it does');
              }}
            >
              {index === 5 ? 'Random' : index + 1}
              <span className='hidden hover:block absolute bg-white text-black p-1'>Click Me</span>
            </button>
          ))}
        </div>
        {message && (
        <div className={`px-4 mx-3 absolute top-[${boxPosition.top}px] left-[${boxPosition.left}px] z-10 bg-black/30 text-black p-2.5 rounded-md w-[200px]`} style={boxPosition}>
          <video className='w-full h-full' autoPlay loop muted>
            <source src={video}type="video/mp4" />
          </video>
            {message}
          </div>
        )}
      
    </div>
  );
}

export default App;
