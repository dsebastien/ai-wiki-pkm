// Plausible event wrapper for the wiki. Exposes window.wikiAnalytics for
// other client scripts and installs a delegated listener for external links.

(function () {
  const send = (name, props) => {
    if (typeof window.plausible === 'function') {
      window.plausible(name, props ? { props } : undefined);
    }
  };

  window.wikiAnalytics = {
    searchPerformed(queryLength, resultCount) {
      send('search_performed', { query_length: queryLength, result_count: resultCount });
    },
    searchSelected(targetSlug, rank) {
      send('search_selected', { target: targetSlug, rank });
    },
    themeToggled(mode) {
      send('theme_toggled', { mode });
    },
    graphNodeFocused(slug) {
      send('graph_node_focused', { slug });
    },
    graphNodeOpened(slug) {
      send('graph_node_opened', { slug });
    },
    externalLinkClicked(url, domain) {
      send('external_link_clicked', { domain, url: url.slice(0, 200) });
    },
  };

  document.addEventListener(
    'click',
    (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('/') || href.startsWith('?')) return;
      let url;
      try { url = new URL(href, window.location.href); } catch { return; }
      if (url.origin === window.location.origin) return;
      window.wikiAnalytics.externalLinkClicked(url.toString(), url.hostname);
    },
    true,
  );
})();
