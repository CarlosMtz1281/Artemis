import { Stack, ImageList, ImageListItem } from '@mui/material';
import { itemData } from './Items';

export const MuiImageList = () => {
    return <Stack spacing={4}>
        <ImageList
            sx={{
                width: 500,
                height:450,
            }}
        >
            {
                itemData.map(item => (
                    <ImageListItem key={itemData.img}>
                        <img 
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                            alt={item.title}
                            loading='lazy'
                            />
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
}