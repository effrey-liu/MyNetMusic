import { useEffect, useState } from 'react';
import KKPagination from '../../../../Components/pagination/pagination'
import './radioRanking.css'
import RadioRankingCover from '../../../../Components/radioRankingCover/radioRankingCover';
import { getRadios } from "../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function RadioRanking() {
    const [RankingKind, setRankingKind] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const { currentId, radios } = useSelector((state: any) => ({
        currentId: state.getIn(["djRadio", "currentId"]),
        radios: state.getIn(["djRadio", "radios"])
    }), shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentId === 0) return;
        dispatch(getRadios(currentId, 0))
    }, [dispatch, currentId]);

    const onPageChange = (page: any, pageSize: any) => {
        setCurrentPage(page);
        dispatch(getRadios(currentId, page * 30));
    }
    return <div className='radioRankingBox'>
        <div className='radioRankingTitleBox'>
            <div className='radioRankingTitle'>电台排行榜</div>
            <div className='radioRankingKind'>
                <span className={RankingKind === 1 ? 'radioRankingKindOne choosed' : 'radioRankingKindOne'} onClick={() => setRankingKind(1)}>上升最快</span>
                <span className='fenge'>|</span>
                <span className={RankingKind === 2 ? 'radioRankingKindTwo choosed' : 'radioRankingKindTwo'} onClick={() => setRankingKind(2)}>最热电台</span>
            </div>
        </div>
        <div className="radioRankingList">
            {
                radios.map((item: any, index: number) => {
                    return (<RadioRankingCover key={item.id} radio={item} />)
                })
            }
        </div>
        <KKPagination currentPage={currentPage}
            total={400}
            pageSize={30}
            onPageChange={onPageChange} />
    </div>
}