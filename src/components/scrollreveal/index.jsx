import { useEffect, useRef } from "react";

const OBSERVER_OPTIONS = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  tag: Tag = "div",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("revealed");
        observer.unobserve(el);
      }
    }, OBSERVER_OPTIONS);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${animation} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
