import { ProductCard } from "../ProductCard/ProductCard"
import { HomeContainer } from "./HomeStyle"

export function Home () {

    return(
        <HomeContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </HomeContainer>
    )
}