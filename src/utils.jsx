import { useRouter } from 'next/router';

import site from './site.json';
import { useRouterStore } from './stores/router-store';

const { imgUrl } = site;

export function useRouterState() {
  const { pathname } = useRouter();
  const { destination } = useRouterStore();

  const isHome = pathname === '/';
  const isLoading = !!destination;
  const showHomeLayout = (isHome && !isLoading) || destination === '/';

  return { isLoading, showHomeLayout };
}

export function getImgSrc(name, w, h, withDescriptor = false) {
  const descriptor = withDescriptor ? ` ${w}w` : '';
  return `${imgUrl}/w_${w},h_${h},c_fill,g_south,q_90/${name}${descriptor}`;
}

export const NewTabLink = (props) => (
  <a {...props} target="_blank" rel="noopener noreferrer" />
);
