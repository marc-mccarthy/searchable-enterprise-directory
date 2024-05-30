import { Loading } from './LoadingBar.styles.jsx';
import loadingBar from '/images/loading-bar.gif';
import sadBar from '/images/sad-bar.gif';

const LoadingBar = ({ isEmpty }) => {
  return (
    <Loading>
      {isEmpty ? (
        <>
          <img src={sadBar} alt='sad' />
          <span role='img' aria-label='sad emoji'>
            😢
          </span>
        </>
      ) : (
        <img src={loadingBar} alt='loading' />
      )}
    </Loading>
  );
};

export default LoadingBar;
