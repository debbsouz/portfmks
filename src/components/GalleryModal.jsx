import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sitePath } from '../utils/sitePath';

function CoverFrame({ project, lang, t }) {
  const fitClass = project.coverFit === 'contain' ? ' project-cover-contained' : '';
  return <div className={`project-cover${fitClass}`}>
    {project.coverImage ? <img src={sitePath(project.coverImage)} alt="" loading="lazy" decoding="async" /> : <>
      <span className="cover-name">{project.name}</span>
      <span className="cover-index">{project.category[lang]}</span>
      <span className="cover-fallback" aria-hidden="true">{project.name.charAt(0)}.</span>
    </>}
    {project.isConceptual && <span className="cover-badge">{t.conceptualLabel}</span>}
  </div>;
}

export default function GalleryModal({ projects, t, lang }) {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const panelRef = useRef(null);
  const lightboxRef = useRef(null);
  const openerRef = useRef(null);
  const imageOpenerRef = useRef(null);
  const close = useCallback(() => { setActiveImageIndex(null); setActiveProject(null); }, []);
  const creatives = activeProject?.creatives.filter((creative) => creative?.url).slice(0, 12) ?? [];

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => panelRef.current?.querySelector('button')?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus?.();
    };
  }, [activeProject]);

  useEffect(() => {
    if (activeImageIndex === null) {
      imageOpenerRef.current?.focus?.();
      return;
    }
    requestAnimationFrame(() => lightboxRef.current?.querySelector('button')?.focus());
  }, [activeImageIndex]);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        if (activeImageIndex !== null) setActiveImageIndex(null);
        else close();
      }
      if (activeImageIndex !== null && creatives.length > 0 && event.key === 'ArrowRight') {
        setActiveImageIndex((index) => (index + 1) % creatives.length);
      }
      if (activeImageIndex !== null && creatives.length > 0 && event.key === 'ArrowLeft') {
        setActiveImageIndex((index) => (index - 1 + creatives.length) % creatives.length);
      }
      if (event.key === 'Tab') {
        const scope = activeImageIndex !== null ? lightboxRef.current : panelRef.current;
        const focusable = scope?.querySelectorAll('button:not(:disabled)');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject, activeImageIndex, creatives.length, close]);

  return <>
    <div className="gallery-grid">
      {projects.map((project) => <article key={project.id} className="project-card">
        <button type="button" className="project-open" onClick={(event) => { openerRef.current = event.currentTarget; setActiveProject(project); }} aria-haspopup="dialog" aria-label={`${t.galleryOpen}: ${project.name}`}>
          <CoverFrame project={project} lang={lang} t={t} />
        </button>
        <div className="project-caption">
          <h3>{project.name}</h3>
          <div className="project-caption-meta">
            <span className="tag">{project.category[lang]}</span>
            {project.creatives.length > 0 && <span className="project-count">{project.creatives.length} {t.creativeCount}</span>}
          </div>
        </div>
        <p className="project-description">{project.description[lang]}</p>
        <button type="button" className="gallery-trigger" onClick={(event) => { openerRef.current = event.currentTarget; setActiveProject(project); }} aria-haspopup="dialog">
          {t.galleryOpen} <span aria-hidden="true">→</span>
        </button>
      </article>)}
    </div>

    {activeProject && <div className="modal-overlay" onClick={close} role="dialog" aria-modal="true" aria-labelledby={`gallery-title-${activeProject.id}`}>
      <div className="modal-panel" ref={panelRef} onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div><span className="modal-head-tag">{activeProject.category[lang]}</span><h2 className="modal-head-title" id={`gallery-title-${activeProject.id}`}>{activeProject.name}</h2></div>
          <button type="button" className="modal-close" onClick={close} aria-label={t.modalClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="project-description">{activeProject.description[lang]}</p>
          {creatives.length ? <div className="creative-grid">{creatives.map((creative, index) => <button
            key={`${creative.url}-${index}`} type="button" className="creative-item"
            onClick={(event) => { imageOpenerRef.current = event.currentTarget; setActiveImageIndex(index); }}
            aria-label={`${t.openCreative} ${creative.caption[lang]}`}>
            <div className="creative-thumb"><img src={sitePath(creative.thumbnail || creative.url)} alt={creative.alt[lang]} width={creative.width} height={creative.height} loading="lazy" decoding="async" /></div>
            <div className="creative-caption">{creative.caption[lang]}</div>
          </button>)}</div> : <p className="gallery-empty">{t.galleryEmpty}</p>}
        </div>
      </div>
    </div>}

    {activeImageIndex !== null && activeProject && creatives[activeImageIndex]?.url && <div className="lightbox" onClick={() => setActiveImageIndex(null)}>
      <div className="lightbox-stage" ref={lightboxRef} onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={() => setActiveImageIndex(null)} aria-label={t.modalClose}>×</button>
        <div className="lightbox-frame"><img src={sitePath(creatives[activeImageIndex].url)} alt={creatives[activeImageIndex].alt[lang]} width={creatives[activeImageIndex].width} height={creatives[activeImageIndex].height} /></div>
        <p className="lightbox-caption">{creatives[activeImageIndex].caption[lang]}</p>
        <p className="lightbox-count">{activeImageIndex + 1} / {creatives.length}</p>
        <div className="lightbox-nav">
          <button type="button" className="lightbox-btn" onClick={() => setActiveImageIndex((index) => (index - 1 + creatives.length) % creatives.length)}>← {t.modalPrev}</button>
          <button type="button" className="lightbox-btn" onClick={() => setActiveImageIndex((index) => (index + 1) % creatives.length)}>{t.modalNext} →</button>
        </div>
      </div>
    </div>}
  </>;
}
