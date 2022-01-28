//React
import React, {useState} from 'react';

export const LazyImage = ({ src, alt}) => {
  
  const [loaded, setLoaded] = useState(false);
  //Set image className based on loaded state
  const imageClassNames = `smooth-image img-${loaded ? "visible" : "hidden"}`;

  const handleLoad=()=>{
      setLoaded(true);
  }
  return (
    <div className='smooth-image-wrapper'>
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={`${imageClassNames}`}
      />
      {
        !loaded && <div className="smooth-preloader"><span className="loader"/></div>
      }
    </div>
  );
};

