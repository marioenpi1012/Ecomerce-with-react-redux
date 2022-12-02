import style from '../../style/BackgroundImage.module.scss'
const BackgroundImage = ({image, className=''}) =>{
    const url = `${process.env.PUBLIC_URL}/images/`
    return(
        <div 
            className={`${style.BackgroundImage} ${className}`}
            style={{backgroundImage:`url(${url}${image}.jpg)`}}>
        </div>
    )
}

export default BackgroundImage;