import React from 'react';
import styles from './css/post.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {pink} from '@mui/material/colors';
const Post = (props) => {
    const number = 23;
    return (
        <>
        <div className={`${props.isBlured?(styles.blured):""}`}>
            <div className={`${styles.postBlock}`}>
                <div className={`${styles.postContent}`}>
                    <div className={`${styles.postInfoDesc}`}>
                        <div className={`${styles.postInfo}`}>
                            <div className={`${styles.postProfilePic}`}>

                            </div>
                            <div className={`${styles.postOwnerInfo}`}>
                                <div className={`${styles.postDate}`}>
                                    <p>Dodany: 22/05/2022</p>
                                </div>
                                <div className={`${styles.postOwnerName}`}>
                                    <p>Kazik Wolny</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.postDesc}`}>
                            <div>
                            <p>Wczoraj byłem na imprezie, było super!</p>
                            </div>
                        </div>
                        <div className={`${styles.postLikesBlock}`}>
                            <div className={`${styles.postLikeIcon}`}>
                                <FavoriteIcon sx={{color:pink[300]}} className={`${styles.FavIco}`}/>
                            </div>
                            <div className={`${styles.postLikeValue}`}>
                                <p>{number}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.postImage}`}>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Post;