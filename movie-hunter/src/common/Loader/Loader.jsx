import { useSelector } from 'react-redux';
import { getLoader } from '../../store/selectors';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-wrapper'>
      <div className='loader-ring' />
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
