import './radioNew.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
    getRadioRecommend
} from "../store/actionCreators";

import RadioNewCover from '../../../../Components/radioNewCover/radioNewCover';

export default function RadioNew() {

    const { currentId, recommends } = useSelector((state: any) => ({
        currentId: state.getIn(["djRadio", "currentId"]),
        recommends: state.getIn(["djRadio", "recommends"])
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentId === 0) return;
        dispatch(getRadioRecommend(currentId));
    }, [dispatch, currentId])


    return <div className='radioNewBox'>
        <div className='radioNewTitle'>
            优秀新电台
        </div>
        <div className='radioNewList'>
            {
                recommends.slice(0, 5).map((item: any) => {
                    return (<RadioNewCover info={item} key={item.id} />)
                })
            }
        </div>
    </div>
}