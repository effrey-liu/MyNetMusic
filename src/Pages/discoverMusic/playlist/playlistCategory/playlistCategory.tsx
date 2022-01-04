import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
    changeCurrentCategoryAction,
    getSongList
} from "../store/actionCreators";

import "./playlistCategory.css";

export default function PlaylistCategory() {
    // redux
    const { category } = useSelector((state: any) => ({
        category: state.getIn(["playlist", "category"])
    }), shallowEqual);
    const dispatch = useDispatch();

    function selectCategory(name: any) {
        dispatch(changeCurrentCategoryAction(name));
        dispatch(getSongList(0));
    }

    return (
        <div className='CategoryWrapper'>
            <div className="arrow sprite_icon"></div>
            <div className="all">
                <span className="link" onClick={e => selectCategory("全部")}>全部风格</span>
            </div>
            <div className="category">
                {
                    category.map((item: any, index: any) => {
                        return (
                            <dl key={item.name} className={"item" + index}>
                                <dt>
                                    <i className="icon sprite_icon2"></i>
                                    <span>{item.name}</span>
                                </dt>
                                <dd>
                                    {
                                        item.subs.map((sItem: any) => {
                                            return (
                                                <div className="item" key={sItem.name}>
                                                    <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                                                    <span className="divider">|</span>
                                                </div>
                                            )
                                        })
                                    }
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        </div>
    )
}
