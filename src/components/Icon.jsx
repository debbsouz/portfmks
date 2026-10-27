const paths = {
  linkedin: <><path d="M4 3.5A1.5 1.5 0 1 1 4 6.5a1.5 1.5 0 0 1 0-3ZM2.7 8h2.6v9H2.7z" /><path d="M8 8h2.5v1.2a3.2 3.2 0 0 1 2.8-1.5c3 0 3.7 2 3.7 4.5V17h-2.7v-4.2c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V17H8z" /></>,
  github: <><path d="M8.2 18.4c-4.2 1.3-4.2-2.1-5.9-2.5m11.8 5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C5.4 2.6 4.4 3 4.4 3a4.4 4.4 0 0 0-.1 3.3A4.7 4.7 0 0 0 3 9.6c0 4.7 2.8 5.7 5.5 6a2.8 2.8 0 0 0-.8 2.2v3.2" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
  mail: <><rect x="2.5" y="4" width="19" height="16" rx="1" /><path d="m3 6 9 7 9-7" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></>
};

export default function Icon({ name, className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill={name === 'linkedin' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
