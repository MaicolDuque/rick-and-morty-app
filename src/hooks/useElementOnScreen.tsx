import { useEffect, useRef, useState } from "react";

export function useElementOnScreen({ distance = '10px', externalRef }: any){
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = externalRef ? externalRef.current : elementRef.current
    const onChange = (entries: any) => {
      const [ entry ] = entries
      setIsVisible(entry.isIntersecting)
    }
    const observer = new IntersectionObserver(onChange, { rootMargin: distance })
    if (element) observer.observe(element)

    return () => {
      observer && observer.disconnect()
    }
  })

  return { isVisible, elementRef }

}
