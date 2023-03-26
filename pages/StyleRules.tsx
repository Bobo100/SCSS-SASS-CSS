import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { CommonPrism, CommonPrismHhtml } from "../components/Common";
import Layout from "../components/layout";

export default function StyleRules() {
    const router = useRouter();

    return (
        <Layout>
            <Head>
                <title>SCSS的樣式規則</title>
            </Head>
            <div>
                <h1>SCSS的樣式規則</h1>
                <p>
                    首先，CSS（Cascading Style Sheets）是一種用於定義在網頁上的樣式或佈局的語言。
                    它可以包含選擇器，屬性和值等元素，其中選擇器指向要應用樣式的文檔元素。
                </p>
                <p>
                    樣式規則是 Sass 的基礎，就像它是 CSS 的基礎一樣。它們的工作方式也相同：您可以選擇要使用選擇器樣式化的元素，並聲明影響這些元素外觀的屬性。
                </p>

                <h2>Nesting</h2>
                <p>
                    Sass 允許您將選擇器嵌套在其他選擇器中，以便更有效地定義樣式。這稱為嵌套。
                </p>
                <CommonPrism>
                    {`.parent {
    color: red;
    .child {
        color: blue;
    }
}`}
                </CommonPrism>

                <p>也可以使用複數的選擇器</p>
                <CommonPrism>
                    {`.parent, .sibling {
    color: red;
    .child {
        color: blue;
    }
}`}
                </CommonPrism>
                <p>上面的意思是，只要是 .parent 或 .sibling 的元素，就會變成紅色，而且只要是 .parent 或 .sibling 的子元素，就會變成藍色。</p>

                <h2>選擇器的符號</h2>
                <p>選擇器的符號有以下幾種：</p>
                <ul>
                    <li>逗號 {`,`}：選擇器之間的逗號表示選擇器的同級</li>
                    <li>空格：選擇器之間的空格表示選擇器的後代</li>
                    <li>and符號 {`&`}：選擇器之間的and符號表示選擇器的父代</li>
                    <li>大於號 {`>`}：選擇器之間的大於號表示選擇器的子代</li>
                    <li>加號 {`+`}：選擇器之間的加號表示選擇器的下一個兄弟</li>
                    <li>波浪號 {`~`}：選擇器之間的波浪號表示選擇器的所有兄弟</li>

                    {/* <li>冒號 {`:`}：選擇器之間的冒號表示選擇器的狀態</li>
                    <li>雙冒號 {`::`}：選擇器之間的雙冒號表示選擇器的偽元素：</li>
                    <li>中括號 {`[]`}：選擇器之間的中括號表示選擇器的屬性</li> */}
                </ul>
                <p>還有像是虛擬類、屬性選擇器等等</p>
                <ul>
                    <li>虛擬類(單冒號開頭)：:hover、:active、:focus、:visited、:link</li>
                    <li>偽元素(雙冒號開頭)：::before、::after、::first-letter、::first-line</li>
                    <li>屬性選擇器：[type="text"]、[disabled]、[type="checkbox"]:checked</li>
                </ul>

                <p>下面我們來看看這些符號的使用</p>

                <h3>逗號</h3>
                <p>逗號 {`,`}：選擇器之間的逗號表示選擇器的同級</p>
                <CommonPrism>
                    {`.parent_1, .sibling_1 {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<div className="parent_1">parent_1</div>
<div className="sibling_1">
sibling_1
    <div>
    sibling_1_son
    </div>
</div>`}
                </CommonPrismHhtml>
                <div className="parent_1">parent_1</div>
                <div className="sibling_1">
                    sibling_1
                    <div>
                        sibling_1_son
                    </div>
                </div>
                <p>上面的意思是，只要是 .parent 或 .sibling 的元素，就會變成紅色。</p>

                <h3>空格</h3>
                <p>選擇器之間的空格表示選擇器的後代</p>
                <CommonPrism>
                    {`.parent_2 .child_2 {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {` <div className="parent_2">parent_2
    <div className="child_2">child_2</div>
    <div className="child_2_2">child_2_2</div>
</div>`}

                </CommonPrismHhtml>
                <div className="parent_2">parent_2
                    <div className="child_2">child_2</div>
                    <div className="child_2_2">child_2_2</div>
                </div>
                <p>上面的意思是，只要是 .parent_2 下面的 .child_2 的元素，就會變成紅色。而 .child_2_2 不會變成紅色。</p>

                <h3>and符號 &</h3>
                <p>選擇器之間的and符號表示選擇器的父代</p>
                <CommonPrism>
                    {`.parent_3 {
    color: red;
    & .child_3 {
        color: blue;
    }
    &:hover {
        color: green;
    }
    :hover {
        color: red;
    }
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<div className="parent_3">parent_3
    <div className="child_3">child_3
        <div className="grandchild_3">grandchild_3</div>
    </div>
    <div className="child_3">child_3</div>
</div>`}
                </CommonPrismHhtml>
                <div className="parent_3">parent_3
                    <div className="child_3">child_3
                        <div className="grandchild_3">grandchild_3</div>
                    </div>
                    <div className="child_3">child_3</div>
                </div>
                <p>意思是當我們看到& .child_3 就等於 .parent_3 .child_3，所以 .child_3 的元素會變成藍色。</p>
                <p>另外我們還新增了&:hover 也一樣意思就會變成 .parent_3:hover，所以，當我們滑鼠移動到 .parent_3的範圍(整個包含child grandson) 時，.整個範圍都會 變成綠色。(只是我們這裡子元素有用其他顏色蓋過去)</p>
                <p>當然我們也有新增假如不加上&，就會變成 :hover，將影響這個元素下的所有子代元素，所以，當我們滑鼠移動到 .child_3 時，會變成白色。</p>
                <Link href="/Hover" className={router.pathname === "/Hover" ? "active" : ""}>Hover</Link>
                <h3>大於號 {`>`}</h3>
                <p>選擇器之間的大於號表示選擇器的子代</p>
                <CommonPrism>
                    {`.parent_4 > .child_4 {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {` <div className="parent_4">parent_4
    <div className="child_4">child_4
        <div className="grandchild_4">grandchild_4</div>
    </div>
    <div className="child_4_4">child_4_4</div>
</div>`}
                </CommonPrismHhtml>
                <div className="parent_4">parent_4
                    <div className="child_4">child_4
                        <div className="grandchild_4">grandchild_4</div>
                    </div>
                    <div className="child_4_4">child_4_4</div>
                </div>
                <p>上面的意思是，只要是 .parent_4 下面的 .child_4 的元素，就會變成紅色。當然也包含.child_4的子元素，向是 .grandchild_4。但是 .child_4_4 不會變成紅色，因為 .child_4_4 不是 .child_4 的子元素。</p>

                <h3>加號 +</h3>
                <p>選擇器之間的加號表示選擇器的兄弟，只會影響第一個兄弟</p>
                <CommonPrism>
                    {`.parent_5 + .sibling_5 {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<div className="parent_5">parent_5</div>
<div className="sibling_5">sibling_5</div>`}
                </CommonPrismHhtml>
                <div className="parent_5">parent_5</div>
                <div className="sibling_5">sibling_5</div>
                <div className="sibling_5">sibling_5</div>
                <p>可以看到parent_5的兄弟有兩個，但是只有第一個會變成紅色。</p>

                <h3>波浪號 ~</h3>
                <p>選擇器之間的波浪號表示選擇器的兄弟，會影響之後的所有兄弟</p>
                <CommonPrism>
                    {`.parent_6 ~ .sibling_6 {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<div className="sibling_6">sibling_6</div>
<div className="parent_6">parent_6</div>
<div className="sibling_6">sibling_6</div>
<div className="sibling_6">sibling_6</div>`}
                </CommonPrismHhtml>
                <div className="sibling_6">sibling_6</div>
                <div className="parent_6">parent_6</div>
                <div className="sibling_6">sibling_6</div>
                <div className="sibling_6">sibling_6</div>

                <p>可以看到parent_6的兄弟有兩個，兩個都會變成紅色。</p>

                <h3>屬性選擇器</h3>
                <p>屬性選擇器可以選擇特定的屬性</p>
                <CommonPrism>
                    {`[type="text"] {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<input type="text" />
<input type="number" />`}
                </CommonPrismHhtml>
                <div className="style">
                    <input type="text" placeholder="text" />
                    <input type="number" placeholder="number" />
                </div>
                <p>可以看到只有type="text"的input會變成紅色。</p>

                <h3>子字串選擇器</h3>
                <p>子字串選擇器可以選擇特定的子字串</p>
                <CommonPrism>
                    {`p[class*="text"] {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<p className="text">text</p>
<p className="number">number</p>
<p className="textArea">textArea</p>`}
                </CommonPrismHhtml>
                <div className="child">
                    <p className="text">text</p>
                    <p className="number">number</p>
                    <p className="textArea">textArea</p>
                </div>
                <p>可以看到只有class="text"和class="textArea"的p會變成紅色。因為都有text這個子字串。</p>


                <h3>開頭選擇器</h3>
                <p>開頭選擇器可以選擇特定的開頭</p>
                <CommonPrism>
                    {`p[class^="text"] {
    color: orange;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<p className="text">text</p>
<p className="number">number</p>
<p className="textArea">textArea</p>`}
                </CommonPrismHhtml>
                <div className="start">
                    <p className="text">text</p>
                    <p className="number">number</p>
                    <p className="textArea">textArea</p>
                </div>
                <p>可以看到只有class="text"和class="textArea"的p會變成橘色。因為都有text這個開頭。</p>

                <h3>結尾選擇器</h3>
                <p>結尾選擇器可以選擇特定的結尾</p>
                <CommonPrism>
                    {`p[class$="text"] {
    color: blue;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<p className="text">text</p>
<p className="number">number</p>
<p className="textArea">textArea</p>`}
                </CommonPrismHhtml>
                <div className="end">
                    <p className="text">text</p>
                    <p className="number">number</p>
                    <p className="textArea">textArea</p>
                </div>
                <p>因為只有class="text"是以text結尾，所以只有class="text"的p會變成藍色。</p>

                {/* <h3>屬性值選擇器</h3>
                <p>屬性值選擇器可以選擇特定的屬性值</p>
                <CommonPrism>
                    {`[type="text" i] {
    color: red;
}`}
                </CommonPrism>
                <CommonPrismHhtml>
                    {`<input type="text" />
<input type="number" />
<input type="textArea" />`}
                </CommonPrismHhtml>
                <div className="value">
                    <input type="text" placeholder="text" />
                    <input type="text" placeholder="text" />
                </div>
                 */}


            </div>
        </Layout >
    )
}