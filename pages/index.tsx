import Head from "next/head";
import { CommonPrism } from "../components/Common";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <h1>SCSS介紹</h1>
                <p>
                    首先，CSS（Cascading Style Sheets）是一種用於定義在網頁上的樣式或佈局的語言。
                    它可以包含選擇器，屬性和值等元素，其中選擇器指向要應用樣式的文檔元素。
                </p>
                <p>
                    隨著 CSS 的發展，在實踐中開始出現了繁重和冗長的代碼，這導致了維護和讀取 CSS 代碼的困難。 Sass 誕生了，這是一種比 CSS 更強大、易於維護和減少冗餘代碼的CSS預處理器。
                </p>
                <p>
                    Sass 是一種 CSS 預處理器，它可以讓你使用變量、嵌套規則、混合（mixin）等功能來編寫 CSS 代碼。
                    很好地提高編碼效率，但它仍然基於 CSS 語法，也就是說 Sass 需要使用類似於原生 CSS 的語法來定義樣式。這也限制了它的可讀性和易用性。
                </p>
                <p>
                    因此 SCSS 誕生了，SCSS 為 Sass 引入了自己的特色，使其更加強大且使 Sass 更容易接受。
                    具體來說，SCSS 提供了一個新的語法格式，與 CSS 基本保持一致，同時保留了 Sass 的語法，使 Sass 更加直觀易讀。
                    相比於 Sass，SCSS 更容易學習，也更容易過度到CSS，並且可以保證所有的CSS代碼都可以在SCSS中起作用。
                </p>
                <p>
                    這裡，我們就當你有學過部分css的基礎知識，並且有一定的css經驗，來介紹SCSS的特性。之後我們會對每一個特性進行詳細的介紹。
                </p>
                <h1>SCSS的特性</h1>
                <p>
                    SCSS的基礎語法與CSS的基礎語法相似，但是SCSS的語法更加直觀易讀，並且可以使用變量、嵌套規則、混合（mixin）等功能來編寫 CSS 代碼。
                </p>
                <h2>巢狀規則 / 嵌套規則</h2>
                <p>
                    巢狀規則：SCSS提供了類似編程語言的巢狀規則功能，可以將一個規則巢狀在另一個規則中。
                </p>
                <CommonPrism>
                    {`.parent {
    color: red;
    .child {
        color: blue;
    }
}`}
                </CommonPrism>

                <h2>變數</h2>
                <p>
                    變數：SCSS提供了類似編程語言的變數功能，用於存儲可以重複使用的值。
                </p>
                <CommonPrism>
                    {`$color: red;
.parent {
    color: $color;
}`}
                </CommonPrism>

                <h2>模組化 / 選擇性引入(選擇器)</h2>
                <p>
                    模組化：SCSS提供了模組化的功能，可以將一個SCSS文件拆分成多個SCSS文件，並且可以將多個SCSS文件合併成一個SCSS文件。
                </p>
                <CommonPrism>
                    {`// _base.scss
$color: red;
.parent {
    color: $color;
}

// _child.scss
.parent {
    .child {
        color: blue;
    }
}

// main.scss
@import "base";
@import "child";`}
                </CommonPrism>

                <h2>混合（mixin）</h2>
                <p>
                    混合（mixin）：SCSS提供了類似編程語言的混合（mixin）功能，可以將一個規則集合起來，以便在其他規則中重複使用。寫法是在規則後面加上@mixin，然後在後面加上混合的名稱。
                </p>
                <CommonPrism>
                    {`@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}
.box {
    @include border-radius(10px);
}`}
                </CommonPrism>

                <h2>繼承</h2>
                <p>
                    繼承：SCSS提供了類似編程語言的繼承功能，可以將一個規則繼承到另一個規則中。寫法是在規則後面加上@extend，然後在後面加上要繼承的規則。那就得提到一個問題，就是繼承的規則必須是一個佔位符（placeholder）。
                </p>
                <p>
                    % 在 SCSS 中被稱為 Placeholder Selectors（佔位符選擇器），它們不是繼承。在 SCSS 中，我們可以使用 % 符號來定義一個名稱以百分比符號開頭的選擇器。
                    Placeholder 選擇器通常用於希望重複使用的樣式塊中，可以通過 @extend 將這些樣式應用到實際的 CSS 選擇器。因此，您可以將相同的樣式應用於多個不同的選擇器，使代碼更加簡潔和易於維護。
                </p>

                <p className="hightlight">
                    一般而言，placeholder selectors 主要用於定義通用樣式，比如布局、動畫等，而不是單獨的元素樣式。在實際開發中需要注意 placeholder selectors 的使用次數和按需引入，以減少樣式表的大小和編譯時間。
                </p>

                <CommonPrism>
                    {`%message-shared {
    border: 1px solid #ccc;
    padding: 10px;
    color: #333;
}
.success {
    @extend %message-shared;
    border-color: green;
}
.error {
    @extend %message-shared;
    border-color: red;
}`}
                </CommonPrism>

                <h2>函數</h2>
                <p>
                    函數：SCSS提供了類似編程語言的函數功能，可以將一個規則集合起來，以便在其他規則中重複使用。
                </p>
                <CommonPrism>
                    {`@function double($n) {
    @return $n * 2;
}
div {
    width: double(5px);
}`}
                </CommonPrism>

                <h2>運算</h2>
                <p>
                    運算：SCSS提供了類似編程語言的運算功能，可以將一個規則集合起來，以便在其他規則中重複使用。
                </p>
                <CommonPrism>
                    {`div {
    width: (5px * 2);
}`}
                </CommonPrism>

                <h2>控制指令</h2>
                <p>
                    控制指令：SCSS提供了類似編程語言的控制指令功能，可以將一個規則集合起來，以便在其他規則中重複使用。
                </p>
                <CommonPrism>
                    {`$type: monster;
@mixin make-it-so($type) {
    @if $type == ocean {
        color: blue;
    } @else if $type == monster {
        color: green;
    } @else {
        color: red;
    }
}
div {
    @include make-it-so($type);
}`}
                </CommonPrism>
            </div>
        </Layout>
    )
}

export default HomePage