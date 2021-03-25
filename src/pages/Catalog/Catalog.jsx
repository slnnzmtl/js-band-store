import { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import GoodsList from "../../components/GoodsList/GoodsList";
import { GET_GOODS } from "../../store/actionTypes";
import API from "../../utils/api/CatalogAPI";
import reducer from "./reducer";
import "./Catalog.scss";

const Catalog = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.currentUser && state.auth.currentUser.token);
  const goodsList = useSelector(state => state.catalog && state.catalog.goodsList);

  useEffect(() => {
    if (token)
    API.getBooks(token)
    .then(data => {
      dispatch({
        type: GET_GOODS,
        data
      })
    })
  }, [token]);

  return (
    <div className="catalog">
      <GoodsList goods={goodsList} />
    </div>
  )
};

export {reducer};
export default Catalog;