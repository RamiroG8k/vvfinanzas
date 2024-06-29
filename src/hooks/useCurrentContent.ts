'use client';

import { useEffect, useRef, useState } from 'react';

export default function useCurrentContent(selector: string) {
    const containerRef = useRef<HTMLElement>();
    const [snappedItem, setSnappedItem] = useState<Element>();

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSnappedItem(entry.target);
                }
            });
        }, {
            root: containerRef.current,
            threshold: 1.0
        });


        const items = containerRef.current.querySelectorAll(selector);
        items.forEach(item => observer.observe(item));

        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []);

    return [snappedItem, containerRef];
}
