import {FilterContainer} from './FilterStyle'

export function Filter () {

    return (
        <FilterContainer>
                <div>
                    <h1>Filtro</h1>
                    <label className='filter-text'>Valor mínimo:</label>
                    <input className='filter-input'/>

                    <label className='filter-text'>Valor máximo:</label>
                    <input className='filter-input'/>
                    
                    <label className='filter-text'>Filtrar por nome:</label>
                    <input className='filter-input'/>
                </div>                   
        </FilterContainer>
    )
}