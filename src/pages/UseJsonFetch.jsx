import styled from "styled-components";
import { useJsonFetch } from "../hooks/useJsonFetch";

const StyledPageUseJsonFetch = styled.div``;

const StyledResponse = styled.div`
  font-weight: 700;
`;

const PageUseJsonFetch = () => {
  const [data, loadingData, errorData] = useJsonFetch({
    url: "http://localhost:7070/data",
  });
  const [dataLoading, loading, errorLoading] = useJsonFetch({
    url: "http://localhost:7070/loading",
  });
  const [dataError, loadingError, error] = useJsonFetch({
    url: "http://localhost:7070/error",
  });

  const hasError = Boolean(errorData || errorLoading || error);
  const isLoading = loadingData || loading || loadingError;

  return (
    <StyledPageUseJsonFetch>
      {isLoading ? (
        "Загрузка..."
      ) : hasError ? (
        "Ошибка"
      ) : (
        <>
          Статус 1 <StyledResponse>{data.status}</StyledResponse>
          Статус 2 <StyledResponse>{dataLoading.status}</StyledResponse>
          Статус 3 <StyledResponse>{dataError.status}</StyledResponse>
        </>
      )}
    </StyledPageUseJsonFetch>
  );
};

export { PageUseJsonFetch };
