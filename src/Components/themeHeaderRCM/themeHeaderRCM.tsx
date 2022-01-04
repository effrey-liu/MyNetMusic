import { memo } from 'react'
import PropTypes from 'prop-types'

import "./themeHeaderRCM.css"

const ThemeHeaderRCM: any = memo(function(props: any) {
    const { title, keywords } = props

    return (
        <div className='HeaderRCMWrapper sprite_02'>
                <div className="left">
                    <h3 className="title">{title}</h3>
                    <div className="keyword">
                        {
                            keywords.map((item: any, index: any) => {
                                return (
                                    <div className="item" key={item}>
                                        <a href="todo">{item}</a>
                                        <span className="divider">|</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <a href="todo">更多</a>
                    <i className="icon sprite_02"></i>
                </div>
        </div>
        
    )
})

ThemeHeaderRCM.protoTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

ThemeHeaderRCM.defaultProps = {
    keywords: []
}

export default ThemeHeaderRCM