
let seq = 0; // classNameを重複させないためのシーケンス番号

// 「<p>タグ＋スタイル設定」コンポーネントを返す「なんちゃってstyled-componsnts」
const pTag = (styles: ReadonlyArray<string> | string) => {
  return (props: any) => {
    // class名を生成(重複しないようにseqをカウントアップ)
    const clsNm = `clsNm${seq++}`;

    // <style>タグを<p>をセットで生成する
    // 重複しないclass名でタグとセレクタを作成する
    return (
      <>
        <style>.{clsNm} {'{'}{styles}{'}'}</style>
        <p className={`${clsNm}`} {...props}>{props.children}</p>
      </>    
    )
  }
};

// 「なんちゃってstyled-componsnts」を関数として呼び出して、コンポーネントを取得
const Tag1 = pTag('color:red;');

// 「なんちゃってstyled-componsnts」をタグ付きテンプレートとして呼び出す
const Tag2 = pTag`
color:blue;
font-size:20pt;
`;

// 生成したコンポーネントを表示する
function App() {
  return (
    <div className="App">
      <Tag1>Tag1 props.childrenに渡す文字列</Tag1>
      <Tag2 style={{border:'1px solid green'}}>Tag2 props.childrenに渡す文字列</Tag2>
    </div>
  );
}

export default App;
