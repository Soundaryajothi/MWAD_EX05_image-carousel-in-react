# MWAD_EX05_image-carousel-in-react
## Date:22.09.2025
## Name:SOUNDARYA J
## Reg.no:212223220108

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.
## APP.JSX
```
import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import { carouselImages } from './data/images';
import { Settings } from 'lucide-react';

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [showIndicators, setShowIndicators] = useState(true);
  const [interval, setInterval] = useState(5000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 text-white flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-pink-300 drop-shadow-lg">
          Elegant Image Carousel
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg">
          A colorful, responsive carousel with smooth animations and customizable settings
        </p>
      </header>

      {/* Carousel */}
      <div className="w-full max-w-4xl mb-8">
        <Carousel 
          images={carouselImages} 
          autoPlay={autoPlay} 
          interval={interval} 
          showControls={showControls} 
          showIndicators={showIndicators} 
        />
      </div>

      {/* Settings */}
      <div className="w-full max-w-4xl">
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg shadow-md transition-colors mb-4"
        >
          <Settings size={18} />
          {showSettings ? 'Hide Settings' : 'Show Settings'}
        </button>

        {showSettings && (
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-600">
            <h2 className="text-xl font-semibold mb-4 text-pink-300">Carousel Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left side toggles */}
              <div className="space-y-4">
                {/* AutoPlay */}
                <div className="flex items-center justify-between">
                  <label htmlFor="autoPlay" className="font-medium">Auto Play</label>
                  <div className="relative inline-block w-12 h-6">
                    <input
                      type="checkbox"
                      id="autoPlay"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={autoPlay}
                      onChange={() => setAutoPlay(!autoPlay)}
                    />
                    <div className={`w-full h-full rounded-full transition-colors ${autoPlay ? 'bg-pink-500' : 'bg-gray-600'}`}></div>
                    <div className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform ${autoPlay ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>

                {/* Show Controls */}
                <div className="flex items-center justify-between">
                  <label htmlFor="showControls" className="font-medium">Show Controls</label>
                  <div className="relative inline-block w-12 h-6">
                    <input
                      type="checkbox"
                      id="showControls"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={showControls}
                      onChange={() => setShowControls(!showControls)}
                    />
                    <div className={`w-full h-full rounded-full transition-colors ${showControls ? 'bg-pink-500' : 'bg-gray-600'}`}></div>
                    <div className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform ${showControls ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              </div>

              {/* Right side toggles */}
              <div className="space-y-4">
                {/* Show Indicators */}
                <div className="flex items-center justify-between">
                  <label htmlFor="showIndicators" className="font-medium">Show Indicators</label>
                  <div className="relative inline-block w-12 h-6">
                    <input
                      type="checkbox"
                      id="showIndicators"
                      className="absolute w-6 h-6 opacity-0 z-10 cursor-pointer"
                      checked={showIndicators}
                      onChange={() => setShowIndicators(!showIndicators)}
                    />
                    <div className={`w-full h-full rounded-full transition-colors ${showIndicators ? 'bg-pink-500' : 'bg-gray-600'}`}></div>
                    <div className={`absolute w-6 h-6 bg-white rounded-full shadow transform transition-transform ${showIndicators ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>

                {/* Interval */}
                <div>
                  <label htmlFor="interval" className="font-medium block mb-2">
                    Interval (ms): {interval}
                  </label>
                  <input
                    type="range"
                    id="interval"
                    min="1000"
                    max="10000"
                    step="500"
                    value={interval}
                    onChange={(e) => setInterval(Number(e.target.value))}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1s</span>
                    <span>5s</span>
                    <span>10s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
```

## OUTPUT:
<img width="1920" height="1080" alt="Screenshot 2025-09-22 191323" src="https://github.com/user-attachments/assets/fb46976c-632b-475a-9a09-e3e466c70c89" />

<img width="1920" height="1080" alt="Screenshot 2025-09-22 191337" src="https://github.com/user-attachments/assets/537f1eaa-aedd-4867-adf6-f26f9148ea73" />


## RESULT
The program for creating Image Carousel using React is executed successfully.
