import React from 'react';
import styles from './css/post.module.css';
const Post = (props) => {
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
                            <div className={`${styles.postLikeIcon}`}></div>
                            <div className={`${styles.postLikeValue}`}></div>
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