import { useParams } from 'react-router-dom';
import css from './campervanPage.module.css';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { useDispatch } from 'react-redux';

const CampervanPage = () => {
  const camperId = useParams().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return (
    <div>CampervanPage</div>
  )
}

export default CampervanPage