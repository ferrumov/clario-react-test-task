import { AuthContainer } from "components";

import { PageContainer, Button } from "./styles";

const SignUpPage = () => {
  return (
    <PageContainer>
      <AuthContainer title="Sign up">
        <Button variant="primary">Sign up</Button>
      </AuthContainer>
    </PageContainer>
  );
};

export default SignUpPage;
