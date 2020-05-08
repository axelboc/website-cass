import Router from 'next/router';
import create from 'zustand';

export const [useRouterStore, routerStore] = create(set => ({
  destination: undefined,
  setDestination: destination => set({ destination }),
}));

Router.events.on('routeChangeStart', destination =>
  routerStore.setState({ destination })
);

Router.events.on('routeChangeComplete', () =>
  routerStore.setState({ destination: undefined })
);

Router.events.on('routeChangeError', () =>
  routerStore.setState({ destination: undefined })
);
