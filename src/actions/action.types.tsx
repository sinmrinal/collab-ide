export const codeInput = (value: string) => ({
  type: "INPUT",
  payload: value,
});
export const codeOutput = (value: string) => ({
  type: "OUTPUT",
  payload: value,
});
export const codeLanguage = (value: string) => ({
  type: "LANGUAGE",
  payload: value,
})
export const editorMode = (value: string) => ({
  type: "MODE",
  payload: value,
});
export const editorTheme = (value: string) => ({
  type: "THEME",
  payload: value,
});
export const editorValue = (value: string) => ({
  type: "VALUE",
  payload: value,
});
export const editorFontSize = (value: number) => ({
  type: "FONT_SIZE",
  payload: value,
});
export const roomID = (value: string) => ({
  type: "ID",
  payload: value,
});
export const roomName = (value: string) => ({
  type: "NAME",
  payload: value,
});
export const roomUser = (value: string) => ({
  type: "USERNAME",
  payload: value,
});
export const roomAdmin = (value: string) => ({
  type: "CREATED_BY",
  payload: value,
});