import Head from "next/head"
import { CommonPrism } from "../components/Common"
import Layout from "../components/layout"

const Hover = () => {
    return (
        <Layout>
            <Head>
                <title>Hover介紹</title>
            </Head>
            <div>
                <h1>Hover介紹</h1>
                <p>因為我自己曾經卡在Hover (主要因為符號問題) 所以我想把這個部分的筆記寫下來，以便日後查閱。</p>

                <div className="parent_hover">
                    parent - element
                    <div className="child">
                        parent - child - element
                        <div className="grandson">
                            parent - child - grandson - element
                        </div>
                    </div>
                    <div className="child2">
                        parent - child2 - element
                    </div>
                    <div className="grandson">
                        parent - grandson - element
                    </div>
                </div>

                <CommonPrism>
                    {`.parent_hover {
    color: red;

    // .parent_hover .child的顏色會變成blue
    & .child {
        color: blue;
    }

    //當.parent_hover:hover時，parent_hover下面的所有元素的顏色會變成green
    &:hover {
        color: green;
    }

    //當.parent_hover 下面的元素:hover時 他們自己的顏色會變成white
    :hover {
        color: white;
    }

    // 是當.parent_hover:hover時，.child的顏色會變成yellow
    &:hover .child {
        color: yellow;
    }

    //當.parent_hover:hover時，.child也要hover才會變成orange
    &:hover .child:hover {
        color: orange;
    }

    //當.parent_hover:hover時，.child也要hover 會影響的是grandson 他會變成purple
    &:hover .child:hover .grandson {
        color: purple;
    }

    //當parent_hover的子元素有hover的時候 其子元素底下的.grandson會變成pink
    :hover .grandson {
        color: pink;
    }
}
`}
                </CommonPrism>
            </div>
        </Layout>

    )
}

export default Hover