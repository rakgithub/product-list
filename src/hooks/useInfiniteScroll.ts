import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (
  callback: () => void,
  hasMore: boolean,
  loading: boolean
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          callback();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, callback]
  );

  return lastElementRef;
};
