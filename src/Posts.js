import {Card, Spin, Button, Divider} from "antd";
import styled from "styled-components";

let setRD;

export const Posts = ({posts, filter, setRecipeData}) => {
    // const cards = createPosts(posts);
    // console.log(cards)
    return posts ? generateFilteredPosts(posts, filter, setRecipeData) : <Spin/>

}

const generateFilteredPosts = (posts, filter, setRecipeData) => {
    console.log(posts);
    if (filter.length === 0) {
        return createPosts(posts, setRecipeData)};
    return createPosts(filterPosts(posts, filter), setRecipeData);
}

const filterPosts = (posts, filter) => {
    const a = posts.filter(post => {
        return checkInclude(post.ingredients, filter)})
    console.log(a)
    return a;
}

const checkInclude = (data, filter) => {
    for (let i = 0; i < filter.length; i++) {
        if (!data.includes(filter[i])){
            return false;
        }
    }
    return true;
}

const createFilteredPosts = (posts, filter) => {
    console.log(posts, filter, "sdad");
    let fil;
    if (filter === undefined) {fil = []}
    console.log(filter, filter && true)
    const a = filter && true ? posts.filter(post => {
        return checkIncludes(post.ingredients, filter)}) : posts
    console.log(a, filter && true)
    return a;
}

const checkIncludes = (data, filter) => {
    if (!filter) {return data};
    if (filter === []) {return false}
    console.log(data)
    const a = data === data.map(i => filter.includes(i))
    console.log(a);
    return a;
    // console.log()
}

const createPosts = (posts, setRD) =>
    posts.map(post =>
         <CardContainer title={post.title}>
             <DescContainer>{descriptionGenerator(post)}</DescContainer>
             <ShowRecipeButtonContainer><Button onClick={(e)=>setRD(post)}>Читать</Button></ShowRecipeButtonContainer>
        </CardContainer>)


const descriptionGenerator = (data) => {
    const ingredients = data.ingredients.join(', ');

    return <MicroContainer>
        <div>
            Ингредиенты: {ingredients}
        </div>
        <TimeContainer>
            {data.time}
        </TimeContainer>

    </MicroContainer>
}

const MicroContainer = styled.div`
  display: grid;
`

const TimeContainer = styled.div`
  font-style: italic;
  padding-top: 25px;
`
// const ingredients =



const AuthorContainer = styled.p`
  
  font-style: italic;
`

const DescContainer = styled.p`
  

`

const ShowRecipeButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  
`

const CardContainer = styled(Card)`
  width: 100vw;
  //min-width: 428px;
  @media (min-width: 428px) { 
    width: 500px;
  }
`