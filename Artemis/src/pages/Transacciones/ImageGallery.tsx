import { Stack, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { itemData } from './Items';

export default function MuiImageList(){
    return (
      <Stack spacing={4}>
        <ImageList
          sx={{ width: 1250, height:500 }}
          cols={4}
          gap={8}
        >
          {
            itemData.map(item => (
                <ImageListItem key={item.img}>
                    <img 
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                        alt={item.title}
                        loading='lazy'
                        />
                        <ImageListItemBar title={item.title} />
                </ImageListItem>
            ))
          }
        </ImageList>
    </Stack>
    )
}