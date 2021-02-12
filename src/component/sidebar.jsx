import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../store/actions/categoriesAction'
import {getCatsWithCategoryId} from '../store/actions/catsActions'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-basis: 20%;
`

 class sidebar extends Component {
    componentDidMount(){
        this.props.getCategories()
        
    }

    getCatWithId =(id) => {
        this.props.getCatsWithCategoryId(id)
    }
    render() {
        const {categories} = this.props.categories
        console.log(categories)

        
        return (
            <Wrapper>
                {categories.map(u => 
                     <CategoryItem key={u.id} title={u.name} passedFunction={() => this.getCatWithId(u.id)}>
                     </CategoryItem>
                )}
            </Wrapper>
        )
    }
}

const mapStateToProps  = (state) => ({categories:state.categories})

export default connect(mapStateToProps, {getCategories, getCatsWithCategoryId})(sidebar)