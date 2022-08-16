import styled from "styled-components";

const StyledDetails = styled.div`
  width: 300px;
`;

const StyledAvatar = styled.div`
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

const StyledImage = styled.img`
  max-width: 100%;

  display: block;
`;

const StyledInfo = styled.div`
  display: grid;
  gap: 4px;
`;

const StyledInfoItem = styled.div`
  padding: 8px 24px;

  border: 1px solid #d9d9d9;
`;

const Details = (props) => {
  const { info } = props;
  const { avatar, details, name } = info;
  const { city, company, position } = details;

  return (
    <StyledDetails>
      <StyledAvatar>
        <StyledImage src={avatar} alt={name} />
      </StyledAvatar>

      <StyledInfo>
        <StyledInfoItem>{name}</StyledInfoItem>
        <StyledInfoItem>City: {city}</StyledInfoItem>
        <StyledInfoItem>Company: {company}</StyledInfoItem>
        <StyledInfoItem>Position: {position}</StyledInfoItem>
      </StyledInfo>
    </StyledDetails>
  );
};

export { Details };
