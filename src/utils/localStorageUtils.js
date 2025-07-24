const STORAGE_KEY = "editedComments";

export function getSavedEdits() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
}

export function saveEdit(commentId, newValues) {
  const existing = getSavedEdits();
  existing[commentId] = {
    ...existing[commentId],
    ...newValues,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}
