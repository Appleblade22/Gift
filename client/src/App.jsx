import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [line, setLine] = useState(1);
  const [isTrue, setIsTrue] = useState(false);
  const nextLine = () => {
    setLine(line + 1);
  };
  useEffect(() => {
    console.log("Smarty pants, huh? Well, I've got a poem for you.");
    console.log(`My queen, my love, you rule my heart,
From the very start, you set it apart.
Your beauty, your grace, a sight to behold,
My love for you will never grow old.

In your eyes, I see a love so true,
And with every beat, my heart sings for you.
You reign over me, with your gentle touch,
And in your embrace, I find so much.

Your smile, your laugh, they light up my world,
And with you, my heart has unfurled.
In your arms, I find my home,
And with you, I'll never be alone.

My queen, my love, I give you my heart,
Forever and always, we'll never be apart.
For in you, I've found my soulmate,
And with you, I'll forever celebrate.`);
  }, []);
  const resetLine = () => {
    setIsTrue(true);
    setLine(1);
  };

  return (
    <div className="App">
    <div className='card'>
      <header>
        {line === 1 && (
          <>
          <h1>Promise Me</h1>
              <h2>
            You will never steal, lie, or cheat
          </h2>
          <button className="promise-button" onClick={nextLine}>
              I promise
            </button></>
        )}
      </header>
      <main>
        {line === 2 && (
          <div>
              <h1>Promise Me</h1>

            <h2>
              But if you must steal, then
              steal away my sorrows 
            </h2>
            <button className="next-button" onClick={nextLine}>
              Next
            </button>
          </div>
        )}
        {line === 3 && (
          <div>
              <h1>Promise Me</h1>

            <h2>
              And if you must lie, then
              lie with me all the nights of my life
            </h2>
            <button className="next-button" onClick={nextLine}>
              Next
            </button>
          </div>
        )}
          {line === 4 && (
          <div>
              <h1>Promise Me</h1>

            <h2>
              And if you must cheat, then
              cheat death by never leaving my side
            </h2>
            <button className="next-button" onClick={nextLine}>
              Next
            </button>
          </div>
        )
          }
          {line === 5 && (
            <div>
            
              <h1>
                🍅❤️🥔
              </h1>
              <button className="reset-button" onClick={isTrue ? resetLine : nextLine}>
                Next
              </button>
            </div>
          )}

      </main>
      <footer>
            {line === 6 && (
              <div>
                <h1>
                  Clue
                </h1>
                <h3>
                In the browser, I'm not on display,
                But I have secrets I can convey,
                Press F12, and then you'll see,
                The log is where you should be.
                </h3>
                <button className="reset-button" onClick={resetLine}>
                🫵 are mine 🧁
                </button>
              </div>
            )
            }
      </footer>
    </div>
    </div>
  );
}

export default App;

