import { useCallback, useEffect, useRef, useState } from "react";

type Timer = ReturnType<typeof setTimeout>;

export const useDebounce = () => {
  const timer = useRef<Timer>();

  const debounce = useCallback((func: () => void  , wait = 1000) => {
    clearTimeout(timer.current)
    const timeout = setTimeout(() => func(), wait)
    timer.current = timeout
  }, [timer])

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current)
    };
  }, []);

  return debounce
}
