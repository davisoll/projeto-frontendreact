import { CardContainer } from "./ProductCardStyle"

export function ProductCard() {

    return (
        <CardContainer>
            <div>
                <img src="https://s2.glbimg.com/8TDfa_-hI-U_tup2kFpX_hr4WWg=/0x0:1000x577/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/l/X/HsEu22TvifwZlQ9joyfg/passo-1.jpg" className="product-image"/>
                <div className="product-content">
                    <p>Nome do produto</p>
                    <p>Valor</p>
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>
        </CardContainer>
    )
}