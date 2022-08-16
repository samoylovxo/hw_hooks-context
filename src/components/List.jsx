import styled from "styled-components";

const StyledList = styled.div`
  display: grid;
  gap: 4px;
`;

const StyledItem = styled.button`
  padding: 8px 24px;

  border: 1px solid #d9d9d9;

  background-color: #fff;

  font-size: 16px;

  cursor: pointer;
`;

const List = (props) => {
  const { list, onItemClick } = props;

  return (
    <StyledList>
      {list.map((item) => {
        const { id, name } = item;

        return (
          <StyledItem key={id} onClick={() => onItemClick(item)}>
            {name}
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export { List };
