import React from 'react';
import { useContext } from 'react';
import './SortSong.scss';
import { SongContextComponent } from "../../context/Context";
import { SORT_SONG, REVERSE_SORT_SONG } from '../../reducer/songReduser';

export default function SortSong() {
    const [, dispatch] = useContext(SongContextComponent);

  return (
     <form className="selector" id="sex">
            <div className="selector-item">
                <input
                    type="radio"
                    id="like"
                    name="status"
                    className="selector-item_radio"
                    value="like"
                    onClick={() =>     
                        dispatch({
                        type: SORT_SONG,
                    })
                }
                />
                <label htmlFor="like" className="selector-item_label">Like</label>
            </div>
            <div className="selector-item">
                <input
                    type="radio"
                    id="Unlike"
                    name="status"
                    className="selector-item_radio"
                    value="Unlike"
                    onClick={() => 
                        dispatch({
                            type: REVERSE_SORT_SONG,
                        })}
                />
                <label htmlFor="Unlike" className="selector-item_label">Unlike</label>
            </div>
        </form>
  )
};