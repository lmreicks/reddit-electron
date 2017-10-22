import * as React from "react";
import { TextPost } from './text.component';
import { PostData } from './post.model';
import { LinkPost } from './link.component';
import { PicturePost } from './pic.component';
import axios from "axios";
import { Link } from "react-router-dom";

export class Post extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    renderPost() {
        let postData: PostData = this.props.data;
        switch (postData.post_hint) {
            case ("link"):
                return (<LinkPost post={postData}/>)
            case ("image"):
                return (<PicturePost post={postData}/>)
            case ("self"):
                return (<TextPost post={postData}/>)
            default:
                return (<TextPost post={postData}/>)
        }
    }

    upVote() {
        axios.post('https://oauth.reddit.com/r/' + this.props.data.subreddit + '/' + this.props.data.id + '/1');
    }

    downVote() {
        axios.post('https://oauth.reddit.com/api/vote/-1');
    }
    
    render() {
        return (
            <div className="post">
                <div className="title-block">
                    <span className="subreddit-thumb"><i className="fa fa-2x fa-reddit"></i>
                    </span>
                    <div className="subreddit-info">
                        <span>r/{this.props.data.subreddit}</span>
                        <small>3h • {this.props.data.author}</small>
                    </div>
                    <span className="post-options"><a><i className="fa fa-ellipsis-h"></i></a></span>
                </div>
                <div className="post-block">{this.renderPost()}</div>
                <div className="vote-block">
                    <span><i className="fa fa-arrow-circle-o-up" onClick={this.upVote}></i> upvote </span>
                    <span><i className="fa fa-arrow-circle-o-down" onClick={this.downVote}></i> downvote </span>
                    <span><Link to={'/post' + '/' + this.props.data.subreddit + '/' + this.props.data.id}><i className="fa fa-comments fa-inverse"></i></Link>Comments</span>
                </div>
            </div>
        );
    }
}