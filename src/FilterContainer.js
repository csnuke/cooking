import styled from "styled-components";
import {Layout, Select} from "antd";

export const FilterContainer = ({posts, changeFilter}) => {
    const data = generateFilters(posts);
    const options = generateOptions(data);
    console.log(data)
    return (
    <Container mode="tags" placeholder="Ингредиенты" onChange={(filter) => changeFilter(filter)}>
        {options}
    </Container>)
}

const { Option } = Select;


const generateOptions = (options) => options.map(option => <Option key={option}>{option}</Option>)

const generateFilters = (posts) =>
    posts ? [... new Set(posts.map(post=>post.ingredients).flat())] : []

const Container = styled(Select)`
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  @media (min-width: 428px) {
    width: 500px;
  }
`

