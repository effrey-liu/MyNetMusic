import './radioCategory.css'
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import classnames from 'classnames';

import {
  getRadioCategories,
  changeCurrentIdAction
} from "../store/actionCreators";

import { Carousel } from 'antd';
const PAGE_SIZE = 16;

export default function RadioCategory() {
  const dispatch = useDispatch();
  const { categories, currentId } = useSelector((state: any) => ({
    categories: state.getIn(["djRadio", "categories"]),
    currentId: state.getIn(["djRadio", "currentId"]),
  }), shallowEqual);

  const clength = categories && categories.length
  const page = Math.ceil(clength / PAGE_SIZE) || 1;

  useEffect(() => {
    dispatch(getRadioCategories());
  }, [dispatch]);

  const carouselRef: any = useRef();

  function getSize(index: number) {
    return index * PAGE_SIZE > clength ? index * PAGE_SIZE : clength;
  }
  return <div className="radioCategoryBox">
    <div className='arrow arrowLeft' onClick={e => carouselRef.current.prev()}></div>
    <div className='radioCategoryContent'>
      <Carousel dots={{ className: "changeDot" }} ref={carouselRef}>
        {
          Array(page).fill(0).map((_, index) => {
            return (
              <div key={index} className="radioCategoryPage">
                {
                  categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item: any, index: number) => {
                    if (index < PAGE_SIZE)
                      return (
                        <div key={item.id}
                          onClick={e => dispatch(changeCurrentIdAction(item.id))}
                          className={classnames("radioCategoryItem", { "active": currentId === item.id })}>
                          <div className="radioCategoryIcon" style={{ backgroundImage: `url(${item.picWebUrl})` }}></div>
                          <span>{item.name}</span>
                        </div>
                      )
                  })
                }
              </div>
            )
          })
        }
      </Carousel>
    </div>
    <div className="arrow arrowRight" onClick={e => carouselRef.current.next()}></div>
  </div>;
}
