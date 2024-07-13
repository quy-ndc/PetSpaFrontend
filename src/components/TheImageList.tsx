import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
        img: '',
        title: 'Clinical'
    },

    {
        img: '',
        title: 'Neutering'
    },
    {
        img: '',
        title: 'Dentistry'
    },
    {
        img: '',
        title: 'Mass Removal'
    },
    {
        img: '',
        title: 'Orthopedic surgery'
    },
    {
        img: '',
        title: 'Lazer therapy'
    },
    {
        img: '',
        title: 'Physiotherapy'
    },
    {
        img: '',
        title: 'Herbal medicine'
    },
    {
        img: '',
        title: 'Coat Care'
    },
    {
        img: '',
        title: 'Cleaning'
    },
]

export default function TheImageList() {
    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}