import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });
// useEffect hooks 功能：在参数二变化的时候触发，如果没有参数二，则只会触发一次
    useEffect(() => {
        if (count.current > 1) {
            fn();
        }
    }, deps);
};