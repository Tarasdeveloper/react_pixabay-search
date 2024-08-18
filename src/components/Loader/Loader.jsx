import { TailSpin } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <TailSpin color="#3f51b5" height={80} width={80} />
    </Spinner>
  );
};
