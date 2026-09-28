    // Corner Position Finder Patterns
    const drawFinder = (x, y) => {
      rects += `<rect x="${x}" y="${y}" width="7" height="7" fill="#0f172a"/>`;
      rects += `<rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#ffffff"/>`;
      rects += `<rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#0f172a"/>`;
    };
    drawFinder(0, 0);
    drawFinder(14, 0);
    drawFinder(0, 14);
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c >= 13) || (r >= 13 && c < 8)) continue;
        const val = Math.abs(Math.sin(hash + r * 13 + c * 37));
        if (val > 0.45) {
          rects += `<rect x="${c}" y="${r}" width="1" height="1" fill="#0f172a"/>`;
        }
      }
    }
    return `
      <svg viewBox="0 0 21 21" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect width="21" height="21" fill="#ffffff"/>
        ${rects}
      </svg>
    `;
  }
  // Global Namespace Window Bindings for Inline Button Handlers
  window.CampusPulse = {
    openEventDetailModal,
    openRegistrationModal,
    openTicketPassModal,
    closeModal,
    toggleTicketCheckin,
    approveEvent,
    deleteEvent
  };
  // Run on DOM Load
  document.addEventListener('DOMContentLoaded', init);
})();
