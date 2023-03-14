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




            </div>
        </Layout>
    )
}

export default HomePage