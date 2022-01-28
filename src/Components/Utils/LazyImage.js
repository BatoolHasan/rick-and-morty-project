//React
import React, {useState, useRef, useEffect, useCallback} from 'react';

export const LazyImage = ({ src, alt}) => {
  //State
  const [isValidSrc, setIsValidSrc] = useState(!!src);
  const [loaded, setLoaded] = useState(false);
  //Ref to check whether image is complete
  const imageRef = useRef();

  useEffect(() => {
    if (!!imageRef.current?.complete) {
      handleLoad();
    }
  }, []);

  const handleLoad = useCallback(
    () => {
      setLoaded(true);
    },
    [setLoaded]
  );
  const handleError = useCallback(
    () => {
      setIsValidSrc(false);
    },
    [setIsValidSrc]
  );

  //Set image className based on loaded state
  const imageClassNames = `lazy-image img-${loaded ? "visible" : "hidden"}`;
  return (
    <div className='lazy-image-wrapper'>
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`${imageClassNames}`}
      />
      {
        isValidSrc && !loaded && <div className="lazy-preloader"><span className="loader"/></div>
      }
      {
        !isValidSrc && !loaded && <div className="lazy-alt">{alt}</div>
      }
    </div>
  );
};

