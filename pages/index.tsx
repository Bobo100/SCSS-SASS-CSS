import Head from "next/head";
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
                    這裡，我們就當你有學過部分css的基礎知識，並且有一定的css經驗，來介紹SCSS的基礎語法。
                </p>
                <h1>SCSS的基礎語法</h1>
                <p>
                    SCSS的基礎語法與CSS的基礎語法相似，但是SCSS的語法更加直觀易讀，並且可以使用變量、嵌套規則、混合（mixin）等功能來編寫 CSS 代碼。
                </p>
                <h2>巢狀規則</h2>
                <p>
                    巢狀規則：SCSS提供了類似編程語言的巢狀規則功能，可以將一個規則巢狀在另一個規則中。
                </p>
                <h2>變數</h2>
                <p>
                    變數：SCSS提供了類似編程語言的變數功能，用於存儲可以重複使用的值。
                </p>
                <h2>模組化</h2>
                <p>
                    模組化：SCSS提供了模組化的功能，可以將一個SCSS文件拆分成多個SCSS文件，並且可以將多個SCSS文件合併成一個SCSS文件。
                </p>
                <h2>嵌套規則</h2>
                <p>
                    嵌套規則：SCSS提供了類似編程語言的嵌套規則功能，可以將一個規則嵌套在另一個規則中。
                </p>
                <h2>混合（mixin）</h2>
                <p>
                    混合（mixin）：SCSS提供了類似編程語言的混合（mixin）功能，可以將一個規則集合起來，以便在其他規則中重複使用。
                </p>
                <h2>繼承</h2>
                <p>
                    繼承：SCSS提供了類似編程語言的繼承功能，可以將一個規則繼承到另一個規則中。
                </p>
            </div>
        </Layout>
    )
}

export default HomePage