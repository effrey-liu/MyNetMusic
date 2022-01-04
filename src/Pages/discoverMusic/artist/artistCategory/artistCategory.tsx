import { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { artistCategories } from '../../../../Common/localData';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../store/actionCreators';
import './artistCategory.css'

export default memo(function ArtistCategory() {

    const { currentArea, currentType } = useSelector((state: any) => ({
        currentArea: state.getIn(["artist", "currentArea"]),
        currentType: state.getIn(["artist", "currentType"])
    }), shallowEqual);
    const dispatch = useDispatch();

    const selectArtist = (area: any, type: any) => {
        dispatch(changeCurrentAreaAction(area));
        dispatch(changeCurrentTypeAction(type));
    }

    const renderArtist = (artists: any, area: any) => {
        return (
            <div>
                {
                    artists.map((item: any, index: any) => {
                        const isSelect = currentArea === area && currentType.type === item.type;
                        return (<div key={item.name}
                            className={classNames({ "active": isSelect }, 'artistCategoryItemBox')}>
                            <span onClick={e => selectArtist(area, item)}>{item.name}</span>
                        </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='artistCategoryBox'>
            {
                artistCategories.map((item) => {
                    return (
                        <div className="section" key={item.area}>
                            <h2 className="title">{item.title}</h2>
                            {renderArtist(item.artists, item.area)}
                        </div>
                    )
                })
            }
        </div>
    )
})
