import Router from 'next/router';
import create from 'zustand';

export const useRouterStore = create((set) => ({
  destination: undefined,
  setDestination: (destination) => set({ destination }),
}));

Router.events.on('routeChangeStart', (destination) =>
  useRouterStore.setState({ destination })
);

Router.events.on('routeChangeComplete', () =>
  useRouterStore.setState({ destination: undefined })
);

Router.events.on('routeChangeError', () =>
  useRouterStore.setState({ destination: undefined })
);
