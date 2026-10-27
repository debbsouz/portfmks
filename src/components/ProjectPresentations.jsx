import React, { useCallback, useEffect, useRef, useState } from 'react';
import { sitePath } from '../utils/sitePath';

function TextBlocks({ children }) {
  return String(children || '').split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

function MetricList({ metrics }) {
  if (!metrics?.length) return null;
  return <dl className="case-metric-grid">{metrics.map((metric) => <div key={metric.id}>
    <dt>{metric.label}</dt><dd>{metric.value}</dd><small className={`metric-source ${metric.source}`}>{metric.sourceLabel}</small>
    {metric.note && <small className="metric-note">{metric.note}</small>}
  </div>)}</dl>;
}

function CampaignTable({ rows, t }) {
  if (!rows?.length) return null;
  return <div className="campaign-table-wrap"><table className="campaign-records">
    <caption>{t.campaignTableCaption}</caption>
    <thead><tr><th scope="col">{t.campaignNameColumn}</th><th scope="col">{t.campaignResultColumn}</th><th scope="col">{t.campaignCostColumn}</th><th scope="col">{t.campaignSpendColumn}</th></tr></thead>
    <tbody>{rows.map((row) => <tr key={row.id}><th scope="row">{row.name}</th><td>{row.result}</td><td>{row.costPerResult}</td><td>{row.spend}</td></tr>)}</tbody>
  </table></div>;
}

function CaseSlide({ slide, t, index, total, onOpenEvidence }) {
  return <section key={index} className={`presentation-slide presentation-enter${slide.image ? '' : ' is-text'}`} aria-label={`${t.presentationProgress} ${index + 1} / ${total}`}>
    {slide.image && <figure className={`presentation-image${slide.wide ? ' is-wide' : ''}`}><img src={sitePath(slide.image.url)} alt={slide.image.alt} width={slide.image.width} height={slide.image.height} /><figcaption>{slide.image.caption || ''}</figcaption></figure>}
    <div className="presentation-copy">
      {slide.eyebrow && <span className="eyebrow">{slide.eyebrow}</span>}
      {slide.title && <h3>{slide.title}</h3>}
      {slide.body && <TextBlocks>{slide.body}</TextBlocks>}
      {slide.metrics && <MetricList metrics={slide.metrics} />}
      {slide.list?.length > 0 && <ol className="case-objective-list">{slide.list.map((text, itemIndex) => <li key={`${itemIndex}-${text}`}><span>{String(itemIndex + 1).padStart(2, '0')}</span><p>{text}</p></li>)}</ol>}
      {slide.fields?.length > 0 && <dl className="presentation-fields">{slide.fields.map((field) => <div key={field.label}><dt>{field.label}</dt><dd>{field.value}</dd></div>)}</dl>}
      {slide.campaignRows && <CampaignTable rows={slide.campaignRows} t={t} />}
      {slide.evidence?.map((asset) => <button className="campaign-proof-button" type="button" key={asset.id} onClick={(event) => onOpenEvidence(event, asset)} aria-haspopup="dialog">{t.viewCampaignProof}</button>)}
      {slide.evidence?.map((asset) => <p className="evidence-caption" key={`${asset.id}-caption`}>{asset.caption}</p>)}
    </div>
  </section>;
}

function PhotographyIntro({ slide, index, total, onBegin, t }) {
  return <section key={index} className="presentation-slide photography-intro presentation-enter" aria-label={`${t.presentationProgress} 0 / ${total}`}>
    <figure className="presentation-image"><img src={sitePath(slide.image.url)} alt={slide.image.alt} width={slide.image.width} height={slide.image.height} /><figcaption>{slide.image.caption}</figcaption></figure>
    <div className="presentation-copy"><span className="eyebrow">{t.photographyCategory}</span><h3>{slide.title}</h3><p>{slide.body}</p><button className="photography-begin" type="button" onClick={onBegin}>{slide.startLabel}<span aria-hidden="true">→</span></button></div>
  </section>;
}

function PhotographySlide({ slide, index, total, t }) {
  const current = slide.progressNumber ?? index;
  const count = slide.progressTotal ?? total;
  return <section key={index} className="presentation-photo-slide presentation-enter" aria-label={`${t.presentationProgress} ${current} / ${count}`}>
    <figure><img src={sitePath(slide.image.url)} alt={slide.image.alt} width={slide.image.width} height={slide.image.height} decoding="async" /><figcaption>{slide.image.caption || ''}</figcaption></figure>
  </section>;
}

function EvidenceViewer({ asset, t, onClose, closeRef, focusTrapRef }) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => focusTrapRef.current?.querySelector('button')?.focus());
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); onClose(); }
      if (event.key === 'Tab') {
        event.stopPropagation();
        const controls = focusTrapRef.current?.querySelectorAll('button:not(:disabled)');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => {
      window.removeEventListener('keydown', onKeyDown, true);
      closeRef.current?.focus?.();
    };
  }, [asset.id, closeRef, focusTrapRef, onClose]);

  return <div className="evidence-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="evidence-dialog" role="dialog" aria-modal="true" aria-labelledby={`evidence-title-${asset.id}`} ref={focusTrapRef}>
      <header className="evidence-header"><div><span className="eyebrow">{t.presentationEvidence}</span><h3 id={`evidence-title-${asset.id}`}>{t.evidenceTitle}</h3></div><div className="evidence-header-actions"><button type="button" className="evidence-zoom-button" aria-pressed={isZoomed} onClick={() => setIsZoomed((zoomed) => !zoomed)}>{isZoomed ? t.evidenceFit : t.evidenceEnlarge}</button><button type="button" className="presentation-close" onClick={onClose} aria-label={t.presentationClose}>×</button></div></header>
      <figure className="evidence-figure"><div className={`evidence-image-frame${isZoomed ? ' is-zoomed' : ''}`}><div className={`evidence-image-canvas${isZoomed ? ' is-zoomed' : ''}`}><img src={sitePath(asset.url)} alt={asset.alt} width={asset.width} height={asset.height} />{asset.maskedRegion && <span className="evidence-redaction" aria-hidden="true" style={{ left: `${asset.maskedRegion.left}%`, top: `${asset.maskedRegion.top}%`, width: `${asset.maskedRegion.width}%`, height: `${asset.maskedRegion.height}%` }} />}</div></div><figcaption><span>{asset.caption}</span><span className="evidence-privacy-note">{t.evidenceIdentityNote}</span></figcaption></figure>
    </section>
  </div>;
}

function PresentationViewer({ item, t, lang, onClose, openerRef }) {
  const [index, setIndex] = useState(0);
  const [activeEvidence, setActiveEvidence] = useState(null);
  const panelRef = useRef(null);
  const evidenceRef = useRef(null);
  const evidenceOpenerRef = useRef(null);
  const evidenceOpenRef = useRef(false);
  const slides = item.slides;
  const close = useCallback(() => onClose(), [onClose]);
  const closeEvidence = useCallback(() => {
    evidenceOpenRef.current = false;
    setActiveEvidence(null);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => panelRef.current?.querySelector('.presentation-close')?.focus());
    const onKeyDown = (event) => {
      if (evidenceOpenRef.current) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') { event.preventDefault(); setIndex((current) => (current + 1) % slides.length); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); setIndex((current) => (current - 1 + slides.length) % slides.length); }
      if (event.key === 'Tab') {
        const controls = panelRef.current?.querySelectorAll('button:not(:disabled)');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openerRef.current?.focus?.();
    };
  }, [close, slides.length, openerRef]);

  const slide = slides[index];
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
  const count = slide.progressTotal ?? item.progressTotal ?? slides.length;
  const current = slide.progressNumber ?? index + 1;
  const onOpenEvidence = (event, asset) => {
    evidenceOpenerRef.current = event.currentTarget;
    evidenceOpenRef.current = true;
    setActiveEvidence(asset);
  };

  return <>
    <div className="presentation-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="presentation-dialog" role="dialog" aria-modal="true" aria-labelledby={`presentation-title-${item.id}`} ref={panelRef}>
        <header className="presentation-header"><div><span className="eyebrow">{item.category}</span><h2 id={`presentation-title-${item.id}`}>{item.title}</h2>{item.conceptual && <span className="concept-pill">{t.conceptualLabel}</span>}</div><button className="presentation-close" type="button" aria-label={t.presentationClose} onClick={close}>×</button></header>
        <div className="presentation-stage" aria-live="polite">
          {slide.type === 'photography-intro'
            ? <PhotographyIntro slide={slide} index={index} total={count} onBegin={() => setIndex(1)} t={t} />
            : slide.type === 'photography-photo'
              ? <PhotographySlide slide={slide} index={index} total={count} t={t} />
              : <CaseSlide slide={slide} t={t} index={index} total={slides.length} onOpenEvidence={onOpenEvidence} />}
        </div>
        <footer className="presentation-controls"><span className="presentation-count">{String(current).padStart(2, '0')} / {String(count).padStart(2, '0')}</span><span className="presentation-progress" aria-hidden="true"><i style={{ width: `${(current / count) * 100}%` }} /></span><div><button type="button" onClick={() => setIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)} aria-label={t.modalPrevious}>←</button><button type="button" onClick={() => setIndex((currentIndex) => (currentIndex + 1) % slides.length)} aria-label={t.modalNext}>→</button></div></footer>
      </div>
    </div>
    {activeEvidence && <EvidenceViewer asset={activeEvidence} t={t} onClose={closeEvidence} closeRef={evidenceOpenerRef} focusTrapRef={evidenceRef} />}
  </>;
}

export default function ProjectPresentations({ projects, t, lang, className = '' }) {
  const [active, setActive] = useState(null);
  const openerRef = useRef(null);
  return <>
    <div className={`presentation-grid ${className}`.trim()}>
      {projects.map((item, index) => <article className={`presentation-card${item.kind === 'photography' ? ' photography-card' : ''}${item.kind === 'case-study' ? ' case-study-card' : ''}`} key={item.id}>
        <button className="presentation-card-open" type="button" aria-haspopup="dialog" aria-label={`${item.openLabel || t.caseOpen}: ${item.title}`} onClick={(event) => { openerRef.current = event.currentTarget; setActive(item); }}>
          <span className="presentation-card-image">
            {item.kind === 'case-study' ? <span className="case-metric-cover"><span className="case-card-index">{String(index + 1).padStart(2, '0')}</span><span className="case-card-metrics">{item.previewMetrics?.map((metric) => <span className="case-card-metric" key={metric.label}><span>{metric.value}</span><small>{metric.label}</small></span>)}</span></span> : item.coverImage ? <img src={sitePath(item.coverImage)} alt="" loading="lazy" decoding="async" style={{ objectFit: item.coverFit || 'cover' }} /> : <span className="case-typographic-cover"><span>{item.category}</span><strong>{item.title}</strong><i>{item.title.slice(0, 1)}</i></span>}
            {item.conceptual && <span className="concept-pill">{t.conceptualLabel}</span>}
          </span>
          <span className="presentation-card-copy"><span className="eyebrow">{item.category}</span><span className="presentation-card-title">{item.title}</span><span className="presentation-card-summary">{item.summary}</span><span className="presentation-card-action">{item.openLabel || t.caseOpen}<span aria-hidden="true">↗</span></span></span>
        </button>
      </article>)}
    </div>
    {active && <PresentationViewer key={active.id} item={active} t={t} lang={lang} onClose={() => setActive(null)} openerRef={openerRef} />}
  </>;
}
