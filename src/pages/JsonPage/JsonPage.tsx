import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { json as jsonLang } from "@codemirror/lang-json";
import JsonViewer from "react-json-view";
import Split from "@uiw/react-split";
import { jsonrepair } from "jsonrepair";

const JsonPage = () => {
  const [json, setJson] = useState();
  const [code, setCode] = useState("");
  const [lineBar, setLineBar] = useState("");
  const [autoFix, setAutoFix] = useState(true);
  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);

  const [message, setMessage] = useState("");

  const handleJson = useCallback(() => {
    setMessage("");
    try {
      if (code) {
        const obj = JSON.parse(autoFix ? jsonrepair(code) : code);
        setJson(obj);
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
        setJson(undefined);
        console.log("error: ", err);
      } else {
        console.log("error: ", err);
        throw err;
      }
    }
  }, [code]);

  useEffect(() => {
    handleJson();
  }, [code]);

  const formatJson = useCallback(
    (replacer = 2) => {
      setMessage("");
      try {
        if (code) {
          const obj = JSON.parse(autoFix ? jsonrepair(code) : code);
          const str = JSON.stringify(obj, null, replacer);
          setCode(str);
        }
      } catch (err) {
        if (err instanceof Error) {
          setMessage(err.message);
          setJson(undefined);
        } else {
          throw err;
        }
      }
    },
    [code]
  );
  const editor = useMemo(() => {
    return (
      <div className="min-w-[240px] w-[50%] relative">
        <div className="overflow-auto h-full box-border">
          <CodeMirror
            value={code}
            ref={codeMirrorRef}
            height="100%"
            theme={"light"}
            suppressHydrationWarning
            suppressContentEditableWarning
            style={{ height: "100%" }}
            extensions={[jsonLang()]}
            onUpdate={(cm) => {
              const { selection } = cm.state;
              const line = cm.view.state.doc.lineAt(selection.main.from);
              setLineBar(
                `Line ${line.number}/${cm.state.doc.lines}, Column ${
                  cm.state.selection.main.head - line.from + 1
                }`
              );
              const text = cm.state.sliceDoc(
                selection.main.from,
                selection.main.to
              );
              if (text) {
                if (selection.ranges.length > 1) {
                  setLineBar(`${selection.ranges.length} selection regions`);
                } else {
                  setLineBar(
                    `${text.split("\n").length} lines, ${
                      text.length
                    } characters selected`
                  );
                }
              }
            }}
            onChange={(value, viewUpdate) => {
              setCode(value);
            }}
          />
        </div>
      </div>
    );
  }, [code]);

  const preview = useMemo(() => {
    return (
      <div className="flex flex-1 min-w-[240px] select-none pl-4 overflow-auto h-full">
        {message && <pre className="p-0 m-0">{message}</pre>}
        {json && typeof json === "object" && (
          <JsonViewer
            style={{ width: "100%" }}
            src={json}
            theme={"rjv-default"}
            displayDataTypes={false}
            enableClipboard
            displayObjectSize
            indentWidth={4}
          />
        )}
      </div>
    );
  }, [message, json]);
  return (
    <div className="h-full">
      <Split mode="vertical" visiable={false}>
        <div className="min-h-32  w-full flex flex-col pt-4 pb-4 pl-8 font-bold text-xs bg-base-200">
          <div className="justify-between w-full flex">
            <div
              className="form-control tooltip tooltip-right"
              data-tip="Repairs common JSON errors by replacing incorrect quotes, adding missing quotes, correcting numeric keys, lowercasing literals, escaping unescaped characters, and removing comments and trailing commas."
            >
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Auto fix json </span>
                <input
                  type="checkbox"
                  checked={autoFix}
                  className="checkbox checkbox-secondary"
                  onChange={() => setAutoFix((fixed) => !fixed)}
                />
              </label>
            </div>
            <div className="ml-12 justify-end">
              <button
                className="btn btn-sm ml-12 mr-3"
                onClick={() => {
                  formatJson();
                }}
              >
                Format
              </button>
              <button
                className="btn btn-sm mr-3"
                onClick={() => {
                  formatJson(0);
                }}
              >
                Compress
              </button>
            </div>
          </div>
          <div>{lineBar && <span>{lineBar}</span>}</div>
          <div className="text-error">{message}</div>
        </div>
        <Split className="flex flex-1 h-full">
          {editor}
          {preview}
        </Split>
      </Split>
    </div>
  );
};

export default JsonPage;
