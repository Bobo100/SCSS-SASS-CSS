import Head from "next/head";
import { CommonPrism } from "../components/Common";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>SCSS介紹</title>
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
                    變數：SCSS提供了類似編程語言的變數功能，用於存儲可以重複使用的值。做法是使用$符號開頭，然後是變數的名稱。另外如果是要將變數的值作為選擇器的一部分，則需要在變數名稱前面加上#，並且加上{`\{ \}`}。
                </p>
                <CommonPrism>
                    {`$color: red;
.parent {
    color: $color;
}

// 你也可以這樣寫
$color: red;
p.#{$color} {
  color: $color;
}

// 編譯後
p.red {
    color: red;
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
                    混合（mixin）：SCSS提供了類似編程語言的混合（mixin）功能，功能是寫好之後，可以在其他規則中重複使用。寫法是在規則後面加上@mixin，然後在後面加上混合的名稱。
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

                <h2>mixin和函數的區別</h2>
                <p>
                    Mixin 是一種將一組樣式屬性和值打包起來的機制，可以在需要的地方調用並插入這組樣式。 Mixin 中可以包含變量、條件語句、循環等高級語言特性，<span>可以根據需要動態地生成樣式</span>。
                </p>
                <p>
                    Function 是一種用於執行數學和邏輯運算的機制，可以接受一個或多個參數，對其進行運算並返回結果。 Function 中可以包含變量、條件語句等高級語言特性，<span>但是不能直接生成樣式，它只能返回一個值</span>。
                </p>

                <CommonPrism>
                    {`@mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
}
.box {
    @include border-radius(10px); // 調用mixin 會得到樣式
}

@function double($n) {
    @return $n * 2;
}
div {
    width: double(5px); // 調用function 會得到值 
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

                <h2>運算</h2>
                <p>
                    運算：SCSS提供了類似編程語言的運算功能，可以將一個規則集合起來，以便在其他規則中重複使用。
                </p>
                <p>
                    CSS也可以使用calc()函數來進行運算，可是只能夠進行四則運算，並且不能夠進行變量的運算。但是SCSS可以進行變量的運算。
                </p>
                <CommonPrism>
                    {`$angle: 45deg;                    
div {
    width: (5px * 2);
}`}
                </CommonPrism>
                <p>變量運算的例子</p>
                <CommonPrism>
                    {`$width: 100px;
$height: 50px;
$padding: 10px;
$border: 1px solid #000;
$margin: 10px;
$box: $width + $height + $padding + $border + $margin;

div {
    width: $box;
}`}
                </CommonPrism>

                <CommonPrism>
                    {`$font-size: 16px;

@mixin font($size) {
  font-size: $size;
  line-height: $size * 1.2;
}

h1 {
  @include font($font-size * 2);
}

p {
  @include font($font-size);
}
`}
                </CommonPrism>

                <h2>條件語句</h2>
                <p>
                    條件語句：SCSS提供了類似編程語言的條件語句功能，目前有以下幾種條件語句：
                </p>
                <h3>if else</h3>
                <CommonPrism>
                    {`$type: monster;
@mixin monster {
    border: 1px solid #ccc;
}
@mixin ghost {
    border: 1px solid #fff;
}
@mixin border {
    @if $type == monster {
        @include monster;
    } @else if $type == ghost {
        @include ghost;
    }
}
div {
    @include border;
}`}
                </CommonPrism>

                <h3>while 迴圈</h3>
                <CommonPrism>
                    {`$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}

// 編譯後
.item-6 { width: 12em; }
.item-4 { width: 8em; }
.item-2 { width: 4em; }`}
                </CommonPrism>

                <h3>for 迴圈</h3>
                <CommonPrism>
                    {`@for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
}

// 編譯後
.item-1 { width: 2em; }
.item-2 { width: 4em; }
.item-3 { width: 6em; }

// 也有這種寫法
@for $var from start through end { ... }
// 其中start是起始值，end是結束值，var是迴圈變量，可以是任意的變量名稱。
`}
                </CommonPrism>

                <h3>each 迴圈</h3>
                <p>
                    each 迴圈：each 迴圈可以遍歷一個列表，並將列表中的每個元素賦值給一個變量，然後在迴圈內部使用這個變量。
                </p>
                <CommonPrism>
                    {` // 這個例子中，$animal變量會被賦值為puma、sea-slug、egret和salamander這四個值，然後在迴圈內部使用這個變量。
@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
    }
}

// 編譯後
.puma-icon {
    background-image: url('/images/puma.png');
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png');
}
.egret-icon {
    background-image: url('/images/egret.png');
}
.salamander-icon {
    background-image: url('/images/salamander.png');
}`}
                </CommonPrism>

                <p className="hightlight">注意：</p>
                <p>SCSS 的條件語句只在編譯時處理，即 SCSS 文件被轉換成 CSS 文件之前。一旦 CSS 文件生成，其中就沒有任何 SCSS 的條件語句了。這意味著 SCSS 的條件語句無法在瀏覽器中動態修改。</p>

            </div>
        </Layout>
    )
}

export default HomePage