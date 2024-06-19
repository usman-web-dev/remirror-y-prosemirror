import "remirror/styles/all.css";

import { Remirror, ThemeProvider, useRemirror } from "@remirror/react";
import { FC } from "react";
import { YjsExtension } from "remirror/extensions";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("remirror-yjs-demo", ydoc);

const extensions = () => [new YjsExtension({ getProvider: () => provider })];

export const App: FC = () => {
  const { manager } = useRemirror({ extensions, core: { excludeExtensions: ["history"] } });

  return (
    <ThemeProvider>
      <Remirror manager={manager} autoFocus autoRender="end" />
    </ThemeProvider>
  );
};
