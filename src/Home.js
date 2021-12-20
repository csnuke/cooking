import {Footer, Header} from "antd/es/layout/layout";
import {BackTop, Button, Layout, Modal, Select} from "antd";
import styled from "styled-components";
import useSWR from "swr";
import {fetcher} from "./fetcher";
import {useEffect, useState} from "react";
import axios from "axios";
import {Posts} from "./Posts";
import {ArrowUpOutlined, PlusOutlined, UpCircleFilled} from "@ant-design/icons";
import {FilterContainer} from "./FilterContainer";
import {data} from "./data";

export const Home = () => {

    // const { data, error } = useSWR('http://localhost:3001/recipies', fetcher);

    const [filter, changeFilter] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const [recipeData, setRecipeData] = useState(false);


    console.log(recipeData)
    console.log(filter)
    useEffect(() => {
        console.log(data)
    }, [data])

    console.count()

    return (
        <LayoutContainer>
            <HeaderContainer>Рецепты
                </HeaderContainer>
            <PostsContainer>
                <FilterContainer posts={data} changeFilter={changeFilter}/>
                <Posts posts={data} filter={filter} setRecipeData={setRecipeData}/>
                <Modal title={"Рецепт " + recipeData.title} visible={!!recipeData} footer={
                    <Button onClick={()=>setRecipeData(false)}>Ok</Button>
                }
                onCancel={(e)=>setRecipeData(false)}>
                    <PopUpBody>
                        {generateRecipePopup(recipeData)}
                    </PopUpBody>
                </Modal>
            </PostsContainer>
            <BackTopContainer>
                <BackTopBody />
            </BackTopContainer>
        </LayoutContainer>
    )
}

const generateRecipePopup = (data) => {
    if (!data.body || !data.ingredients){return null}
    console.log(data.ingredients)
    const steps = [];
    const ingredients = data.ingredients.join(', ');

    data.body.map((e, i) => {
        steps.push(
            <PopUpBodyStep>
                {i + 1} {e}
            </PopUpBodyStep>
        )
    })
    return <div>
        Ингредиенты: {ingredients}
        {steps}
    </div>;
}


const PopUpBodyStep = styled.div`
  &::first-letter {
    font-size: 1.5rem;
  }
`

const PopUpBody = styled.div`
  display: grid;
`;

const AddRecipeButton = styled(PlusOutlined)`
  //background-color: ;
  cursor: pointer;
`

const AddRecipeButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  
`

const HeaderContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  font-size: xx-large;
  place-items: center;
  color: white;
  padding-right: 15px;
`;

const LayoutContainer = styled(Layout)`
  height: fit-content;
  background-color: white;
`

const PostsContainer = styled(Layout)`
  //width: 500px;
  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  place-items: center;
  row-gap: 15px;
  
`




const BackTopContainer = styled(BackTop)`
  aspect-ratio: 1 / 1;
  width: 50px;
  height: 50px;
  display: grid; 
  place-items: center;
`

const BackTopBody = styled(UpCircleFilled)`
  transform: scale(3);
`