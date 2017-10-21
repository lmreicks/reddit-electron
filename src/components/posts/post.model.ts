export interface Post {
    approved_at_utc?: any;
    approved_by: any;
    archived: boolean;
    author: string;
    author_flair_css_class?: string;
    author_flair_text?: string;
    banned_at_utc?: any;
    banned_by?: any;
    brand_safe: boolean;
    can_gild: boolean;
    can_mod_post: boolean;
    clicked: boolean;
    contest_mode: boolean;
    created: number;
    created_utc: number;
    distinguished?: any;
    domain?: string;
    downs?: number;
    edited: boolean;
    gilded: number;
    hidden: boolean;
    hide_score: boolean;
    id: string;
    is_crosspostable: boolean;
    is_reddit_media_domain: boolean;
    is_self: boolean;
    is_video: boolean;
    likes?: number;
    link_flair_css_class?: string;
    link_flair_text?: string;
    locked: boolean;
    media: any;
    media_embed: Object;
    mod_reports: any[];
    name: string;
    num_comments: number;
    num_crossposts: number;
    num_reports?: number;
    over_18: boolean;
    parent_whitelist_status: boolean;
    permalink: string;
    pinned: boolean;
    post_hint: string;
    preview: Object;
    quarantine: boolean;
    removal_reason?: any;
    report_reasons?: any;
    saved: boolean;
    score: number;
    secure_media?: any;
    secure_media_embed: Object;
    selftext: string;
    selftext_html: string;
    spoiler: boolean;
    stickied: boolean;
    subreddit: string;
    subreddit_id: string;
    subreddit_name_prefixed: string;
    subreddit_type: string;
    suggested_sort: any;
    thumbnail: string;
    thumbnail_height: number;
    thumbnail_width: number;
    title: string;
    ups: number;
    url: string;
    user_reports: any[];
    view_count?: number;
    visited: boolean;
    whitelist_status: string;
}