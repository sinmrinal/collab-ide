export const codeInput = value => ({
  type: "INPUT",
  payload: value,
});
export const codeOutput = value => ({
  type: "OUTPUT",
  payload: value,
});
export const codeLanguage = value => ({
  type: "LANGUAGE",
  payload: value,
})
export const editorMode = value => ({
  type: "MODE",
  payload: value,
});
export const editorTheme = value => ({
  type: "THEME",
  payload: value,
});
export const editorValue = value => ({
  type: "VALUE",
  payload: value,
});
export const editorBasicAutocomplete = value => ({
  type: "ENABLE_BASIC_AUTOCOMPLETION",
  payload: value,
});
export const editorLiveAutocompletion = value => ({
  type: "ENABLE_LIVE_AUTOCOMPLETION",
  payload: value,
});
export const editorFontSize = value => ({
  type: "FONT_SIZE",
  payload: value,
});
export const editorShowGutter = value => ({
  type: "SHOW_GUTTER",
  payload: value,
});
export const editorPrintMargin = value => ({
  type: "SHOW_PRINT_MARGIN",
  payload: value,
});
export const editorHighlightActiveLine = value => ({
  type: "HIGHLIGHT_ACTIVE_LINE",
  payload: value,
});
export const editorEnableSnippets = value => ({
  type: "ENABLE_SNIPPETS",
  payload: value,
});
export const editorShowLineNumbers = value => ({
  type: "SHOW_LINE_NUMBERS",
  payload: value,
});
