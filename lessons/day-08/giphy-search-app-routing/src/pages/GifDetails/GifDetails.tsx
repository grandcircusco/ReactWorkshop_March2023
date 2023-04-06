import React, { useEffect, useState } from 'react';
import './GifDetails.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchById } from '../../services/search';
import { GiphySearchByIdResponse } from '../../types/api/searchById';

// get gif by id and display it
export default function GifDetails() {
    // custom hook to get search params
    const [searchParams] = useSearchParams();
    const [gifDetails, setGifDetails] = useState<GiphySearchByIdResponse | undefined | null>();
    const gifID = searchParams.get('gifID')
    const navigate = useNavigate();
    console.log(window.history.state);
    useEffect(() => {
        if (!gifID) {
            // show error if there is no gif id in the query parameters
            setGifDetails(null);
            return; // exit out of function early so we dont get to the next part
        }
        searchById(gifID).then(res => {
            setGifDetails(res.data);
        }).catch(err => {
            setGifDetails(null);
        });

        // use effect wants us to add all items we use in the effect to dependency array
        // to ensure we update the component according to them changing
    }, [gifID]);

    if (gifDetails === undefined) {
        return <h1>Loading...</h1>
    }

    if (gifDetails === null) {
        return <h1>No GIF found by that id</h1>
    }

    return (
        <div className='gif-details-page'>
            <h2>{gifDetails.data.title}</h2>
            <p>ID: {gifID}</p>
            <p>Content Rating: {gifDetails.data.rating}</p>
            <img src={gifDetails.data.images.original.url} alt="search response" />
            <a href={gifDetails.data.url}>Link to GIPHY</a>
            <p onClick={() => navigate(-1)}>Go Back</p>
        </div>
    )
}
