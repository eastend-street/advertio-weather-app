import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';

import { SomethingWentWrong, ErrorMessage } from './styles';

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <SomethingWentWrong>
        Something went wrong. Please try again.
      </SomethingWentWrong>
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default ErrorFallback;
