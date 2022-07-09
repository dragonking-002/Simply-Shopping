import { useNavigate } from "react-router-dom"
import { BackgroundImage,Body,DirectoryItemContainer } from "./directory-item.styles"

const DirectoryItem = ({category}) => {
    const {imageUrl,title,path} = category

    const navigate = useNavigate()

    const goToCategoryPage = () => {
        navigate(path)
    }

    return(
        <DirectoryItemContainer onClick={goToCategoryPage}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem