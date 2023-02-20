import { useRouteError } from "react-router-dom";
import styled from 'styled-components'

import error404 from '../../assets/error-404.jpeg'

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export function ErrorPage() {
  const error = useRouteError() as Record<string, string>;
  console.error(error);

  return (
    <ErrorContainer>
      <img src={error404} alt="Page nor found" width={500} />
    </ErrorContainer>
  );
}
