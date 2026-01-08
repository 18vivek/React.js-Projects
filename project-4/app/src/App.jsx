import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchComponents/SearchResult";

export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState(null);
  const[filteredData,setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBtn,setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
      }
    };
    fetchFoodData();
  },[]);

  const searchFood = (e)=>{
    const searchValue = e.target.value;

    if(searchValue===""){
      setFilteredData(null);
    }

    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(filter);
  }

  const filterFood = (type)=>{
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all")
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
    

  }

  const filteredBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
    
  ];
  // console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading ....</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              className="text"
              placeholder="Search Food...."
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {filteredBtns.map((value)=>(
              <Button
              isSelected ={selectedBtn === value.type}
              key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>
            ))}
          </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      font-size: 16px;
      color: white;
      border-radius: 5px;
      border: 1px solid #ff0909;
      height: 40px;
      background-color: transparent;
      padding: 0 10px;
      &::placeholder{
        color: white;
      }
    }
  }

  @media(0<width<600px){
    flex-direction: column;
    height: 120px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f72020" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f72020;
  }
`;

