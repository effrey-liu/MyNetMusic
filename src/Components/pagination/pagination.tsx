import React, { memo } from 'react';
import  './pagination.css';
import { Pagination } from 'antd';

export default memo(function KKPagination(props:any) {
    const { currentPage, total, onPageChange } = props;

    // render function
    function itemRender(page: any, type:any, originalElement:any) {
        if (type === 'prev') {
            return <button className="control prev"> &lt; 上一页</button>;
        }
        if (type === 'next') {
            return <button className="control next">下一页 &gt;</button>;
        }
        return originalElement;
    }

    return (
        <div>
            <Pagination className="pagination"
                size="small"
                current={currentPage}
                defaultCurrent={1}
                total={total}
                pageSize={30}
                showSizeChanger={false}
                itemRender={itemRender}
                onChange={onPageChange} />
        </div>
    )
})
