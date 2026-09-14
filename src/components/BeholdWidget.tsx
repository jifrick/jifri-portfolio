import React, { useEffect } from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'feed-id': string },
        HTMLElement
      >;
    }
  }
  interface Window {
    __bhldScript?: boolean;
  }
}

interface BeholdWidgetProps {
  feedId?: string;
}

export const BeholdWidget: React.FC<BeholdWidgetProps> = ({ feedId = 'KADbhv9ErmUW70WpLQoy' }) => {
  useEffect(() => {
    if (window.__bhldScript) return;
    window.__bhldScript = true;
    const d = document;
    const s = d.createElement('script');
    s.type = 'module';
    s.src = 'https://w.behold.so/widget.js';
    setTimeout(() => {
      d.head.append(s);
    }, 0);
  }, []);

  return (
    <div className="behold-widget-wrapper">
      <behold-widget feed-id={feedId}></behold-widget>
    </div>
  );
};
