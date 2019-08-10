function t(t, e, i) {
  const s = Array.from(t);
  let r;
  if ("" === e) return r = s.filter(t => "file" === t.kind), i ? r : [r[0]];
  const n = e.toLowerCase().split(",").map(t => t.split("/").map(t => t.trim())).filter(t => 2 === t.length);
  return r = r = s.filter(t => {
    if ("file" !== t.kind) return !1;
    const [e, i] = t.type.toLowerCase().split("/").map(t => t.trim());

    for (const [t, s] of n) if (e === t && ("*" === s || i === s)) return !0;

    return !1;
  }), !1 === i && (r = [r[0]]), r;
}

function e(e, i, s) {
  const r = [];
  return t(e.items, i, s).forEach(t => {
    const e = t.getAsFile();
    null !== e && r.push(e);
  }), r;
}

class i extends Event {
  constructor(t, e) {
    var s, r;
    super(t, e), (s = this) instanceof (r = i) || Object.setPrototypeOf(s, r.prototype), this._files = e.files, this._action = e.action;
  }

  get action() {
    return this._action;
  }

  get files() {
    return this._files;
  }

}

class s extends HTMLElement {
  constructor() {
    super(), this._dragEnterCount = 0, this._onDragEnter = this._onDragEnter.bind(this), this._onDragLeave = this._onDragLeave.bind(this), this._onDrop = this._onDrop.bind(this), this._onPaste = this._onPaste.bind(this), this.addEventListener("dragover", t => t.preventDefault()), this.addEventListener("drop", this._onDrop), this.addEventListener("dragenter", this._onDragEnter), this.addEventListener("dragend", () => this._reset()), this.addEventListener("dragleave", this._onDragLeave), this.addEventListener("paste", this._onPaste);
  }

  get accept() {
    return this.getAttribute("accept") || "";
  }

  set accept(t) {
    this.setAttribute("accept", t);
  }

  get multiple() {
    return this.getAttribute("multiple");
  }

  set multiple(t) {
    this.setAttribute("multiple", t || "");
  }

  _onDragEnter(e) {
    if (this._dragEnterCount += 1, this._dragEnterCount > 1) return;
    if (null === e.dataTransfer) return void this.classList.add("drop-invalid");
    const i = t(e.dataTransfer.items, this.accept, null !== this.multiple);
    this.classList.add(!e.dataTransfer || !e.dataTransfer.items.length || void 0 !== i[0] ? "drop-valid" : "drop-invalid");
  }

  _onDragLeave() {
    this._dragEnterCount -= 1, 0 === this._dragEnterCount && this._reset();
  }

  _onDrop(t) {
    if (t.preventDefault(), null === t.dataTransfer) return;

    this._reset();

    const s = e(t.dataTransfer, this.accept, null !== this.multiple);
    void 0 !== s && this.dispatchEvent(new i("filedrop", {
      action: "drop",
      files: s
    }));
  }

  _onPaste(t) {
    const s = e(t.clipboardData, this.accept, void 0 !== this.multiple);
    void 0 !== s && this.dispatchEvent(new i("filedrop", {
      action: "paste",
      files: s
    }));
  }

  _reset() {
    this._dragEnterCount = 0, this.classList.remove("drop-valid"), this.classList.remove("drop-invalid");
  }

}

customElements.define("file-drop", s);

export { s as FileDropElement, i as FileDropEvent };
//# sourceMappingURL=file-drop-element.js.map
