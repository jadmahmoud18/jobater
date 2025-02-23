// hooks/useDocumentTitle.js
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Re-run the effect when the title changes
}
