import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css'; // Or wherever you want to put your main app styles

const App = () => {
  const images = [
     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
     "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
     "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=700&q=80",
     "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=700&q=80"
];

  return (
    <div className="App">
      <h1>React Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default App;