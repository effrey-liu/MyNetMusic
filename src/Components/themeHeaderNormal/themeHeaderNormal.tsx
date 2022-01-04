
import './themeHeaderNormal.css'
export default function ThemeHeaderNormal(props: any) {
    const { title, rightSlot } = props;

    return (
        <div className='themeHeaderBox'>
            <div className="title">{title}</div>
            <div className="right">
                {rightSlot}
            </div>
        </div>
    )
}
