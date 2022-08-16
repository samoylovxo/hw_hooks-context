import { useState } from "react";
import styled from "styled-components";
import { Details } from "../components/Details";
import { List } from "../components/List";
import { useJsonFetch } from "../hooks/useJsonFetch";

const StyledPageUseEffect = styled.div`
  padding: 80px;

  display: flex;
  align-items: flex-start;
  gap: 48px;
`;

const PageUseEffect = () => {
  const [activeItem, setActiveItem] = useState(null);

  const [list, isListLoading] = useJsonFetch({
    url: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
  });

  const [info, isInfoLoading] = useJsonFetch({
    url: `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${activeItem?.id}.json`,
    deps: [activeItem?.id],
  });

  const onListItemButtonClick = (item) => setActiveItem(item);

  return (
    <StyledPageUseEffect>
      {isListLoading ? (
        "Загрузка списка..."
      ) : (
        <List list={list} onItemClick={onListItemButtonClick} />
      )}

      {activeItem &&
        (isInfoLoading ? (
          "Загрузка данных..."
        ) : (
          <Details info={info} isLoading={isInfoLoading} />
        ))}
    </StyledPageUseEffect>
  );
};

export { PageUseEffect };
