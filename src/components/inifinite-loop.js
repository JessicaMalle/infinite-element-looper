import React, {useState, useRef, useCallback, useEffect} from 'react';

function InfiniteLooper({children}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const instanceWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instanceWidth) {
      setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
    }
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, []);

  return (
    <div ref={outerRef} className='outer-looper-wrapper'>
      <div ref={innerRef} className='inner-looper-wrapper'>
        {[...Array(looperInstances)].map((_, index) => {
          return (
            <div
              key={index}
              className='looper-list-instance'
              style={{
                animationDuration: '20s',
              }}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default InfiniteLooper;
