import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCats, getMoreCatsWithCategoryId} from '../store/actions/catsActions'
import styled from 'styled-components'
import CatItem from './CatItem'

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-basis: 80%;
    flex-wrap: wrap;
    background-color: #f5f5f6;
    height: 100vh;
    overflow-y: scroll;
`

const Button = styled.button`
    background-color: #5c3ac6;
    padding: 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`

 class MainArea extends Component {
    componentDidMount(){
        this.props.getCats()
    }
    getMoreCat =() => {
        if (this.props.cats.categoryId) {
            this.props.getMoreCatsWithCategoryId(this.props.cats.categoryId)
        } else {
            this.props.getCats()
        }
    }
    render() {
        const {cats} = this.props.cats
        console.log(cats)

        return (
            <Wrapper>
                {cats.map(u => 
                     <CatItem key={u.id} src={u.url}>
                     </CatItem>
                )}
                <Button onClick={() => this.getMoreCat()}>load more</Button>
            </Wrapper>
        )
    }
}

const mapStateToProps  = (state) => ({cats:state.cats})

export default connect(mapStateToProps, {getCats, getMoreCatsWithCategoryId})(MainArea)