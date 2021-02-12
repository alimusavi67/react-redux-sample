import styled from 'styled-components'

const Category = styled.h6`
cursor: pointer;
padding: 10px;
&:hover {
    background-color: lightgray;
}
`
const CategoryItem = (props) => {
    return (
        <Category onClick={props.passedFunction}>{props.title}</Category>
    )
}

export default CategoryItem