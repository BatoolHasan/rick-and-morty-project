import React, {useState} from 'react';

export const LazyImage = ({ src,alt}) => {
    const [loaded, setLoaded] = useState(false);
    const imageClassnames = `smooth-image img-${
        loaded ? "visible" : "hidden"
      }`;
    const handleLoad=()=>{
        setLoaded(true);
    }
  return (
    <div className='smooth-image-wrapper'>
        <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        className={`${imageClassnames}`}
    />
        {
            !loaded &&
        <div className="smooth-preloader">
        <span className="loader" />
    </div>}

    </div>
  );
};

