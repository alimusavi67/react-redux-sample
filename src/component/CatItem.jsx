import styled from 'styled-components'

const Wrapper = styled.div`
width: 300px;
// height: 300px;
margin: 0 0 0 35px;
padding: 30px 30px 30px 29px;
border-radius: 12px;
box-shadow: 0 2px 0 0 #ebebeb;
background-color: #ffffff;
margin-bottom: 10px;
display: flex;
justify-content: center;
`

const Image = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`

const CatItem = (props) => {
    return (
       <Wrapper>
            <Image src={props.src}></Image>
       </Wrapper>
    )
}

export default CatItem;