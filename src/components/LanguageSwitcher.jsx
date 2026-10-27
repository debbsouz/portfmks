import { sitePath } from '../utils/sitePath';

export default function LanguageSwitcher({ currentLang }) {
  const targetLang = currentLang === 'pt' ? 'en' : 'pt';
  const targetPath = sitePath(targetLang === 'en' ? '/' : '/pt/');
  const label = targetLang === 'en' ? 'Switch to English' : 'Mudar para português';

  return (
    <a className="header-lang" href={targetPath} lang={targetLang} aria-label={label}>
      {targetLang.toUpperCase()} <span aria-hidden="true">↗</span>
    </a>
  );
}
