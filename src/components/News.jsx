import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import CryptoTable from "./CryptoTable";
import WeatherCard from "./WeatherCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "./component.css"

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "top",
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };
    constructor() {
        super();
        this.state = {
            articles: Array({ "status": "success", "totalResults": 1472, "results": [{ "title": "Govt open to 'some tinkering' in capital gains tax regime: Revenue Secy", "link": "https://www.business-standard.com/article/economy-policy/govt-open-to-some-tinkering-in-capital-gains-tax-regime-revenue-secy-122020900789_1.html", "keywords": null, "creator": null, "video_url": null, "description": "Tarun Bajaj said the current capital gains tax structure is 'too complicated' in terms of varied rates and period of holding across the assets and hence needs a relook", "content": null, "pubDate": "2022-02-09 09:01:12", "image_url": null, "source_id": "business-standard", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Indo Count extends fall post Q3 results; slips 35% from 52-week high", "link": "https://www.business-standard.com/article/markets/indo-count-extends-fall-post-q3-results-slips-35-from-52-week-high-122020900793_1.html", "keywords": null, "creator": null, "video_url": null, "description": "The stock was trading at its lowest level since July 2021. In the past one month, it has underperformed the market by falling 22 per cent, as compared to a 2.4 per cent decline in Sensex", "content": null, "pubDate": "2022-02-09 08:56:11", "image_url": null, "source_id": "business-standard", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Moody's expects OMCs' margins to improve over 12-18 months on higher demand", "link": "https://www.business-standard.com/article/economy-policy/moody-s-expects-omc-margins-to-improve-over-12-18-months-on-higher-demand-122020900792_1.html", "keywords": null, "creator": null, "video_url": null, "description": "'We expect the regional refining benchmark to average around $3-4/bbl over the next 12-18 months, balancing our expectations of demand recovery alongside incoming capacity additions,' says Moody's", "content": null, "pubDate": "2022-02-09 08:55:14", "image_url": null, "source_id": "business-standard", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Internet applauds cop who rescued dog from burning car. Watch nail-biting video", "link": "https://www.indiatoday.in/trending-news/story/internet-applauds-cop-who-rescued-dog-from-burning-car-watch-nail-biting-video-1910777-2022-02-09?utm_source=rss", "keywords": null, "creator": null, "video_url": null, "description": "Internet applauds cop who rescued dog from burning car. Watch", "content": null, "pubDate": "2022-02-09 08:44:08", "image_url": null, "source_id": "indiatoday", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "NFR Invites Tenders for the Structure Bond and Earthing - ELC-NFR-OHE-RNY-NBQ-DL2RT", "link": "https://www.sentinelassam.com/tender/nfr-invites-tenders-for-the-structure-bond-and-earthing-elc-nfr-ohe-rny-nbq-dl2rt-577371", "keywords": ["Tenders"], "creator": ["Sentinel Digital Desk"], "video_url": null, "description": "Northeast Frontier Railway Invites Tenders for the Structure Bond and Earthing for Continuous Steel Fencing Between Existing track and Construction track", "content": "The Sentinel provides the latest updates on Tender for the Structure Bond and Earthing  and other online tender notices published by the Northeast Frontier Railway The Sentinel is the online tender website that provides unlimited lifetime free access to Tender for the  Structure Bond and Earthing and other procurement notices types like open tender, public tender, online tenders from the Northeast Frontier RailwayAbout NFR The Northeast Frontier Railway (abbreviated NFR), is one of the 18 railway zones of the Indian Railways. It is headquartered in Maligaon, Guwahati in the state of Assam, and is responsible for the operation and expansion of the rail network all across Northeastern states and some districts of eastern Bihar and northern West Bengal. The departmental set up at the headquarters level and divisional set up in the field assists the General Manager in running the railways. Various departments namely engineering, mechanical, electrical, signal & telecom, operations, commercial, safety, accounts, security, personal, and medical are headed by a Senior Administrative Grade / Higher Administrative Grade officer, providing technical and operational support to the divisions in train operations. Another division is being to be set up in Silchar by bifurcating the Lumding division. About Tender Northeast Frontier Railway Invites Tenders for the Structure Bond and Earthing for Continuous Steel Fencing Between Existing track and Construction track Tender Details Reference No.ELC-NFR-OHE-RNY-NBQ-DL2RTTendering AuthorityNortheast Frontier RailwayBriefstructure bond and earthing for continuous steel fencing between existing track and construction track in track doubling work under rangiya division in connection with track doubling work of nbq-agt via rny (dl) projectKey ValueEstimated CostINR 47.75 Lacs Key DatesLast Date for Submission03-03-2022Opening Date03-03-2022 Site LocationLocation 1Rangiya, Assam, India Official document Disclaimer: We try to ensure accurate & authentic tender information at its level best however it cannot be held responsible for Omissions, Errors, etc. Users are advised to refer to Tender Document published by Procuring entity before they take to submit the bid.", "pubDate": "2022-02-09 08:43:21", "full_description": "The Sentinel provides the latest updates on Tender for the Structure Bond and Earthing and other online tender notices published by the Northeast Frontier Railway The Sentinel is the online tender website that provides unlimited lifetime free access to Tender for the Structure Bond and Earthing and other procurement notices types like open tender, public tender, online tenders from the Northeast Frontier Railway The Northeast Frontier Railway (abbreviated NFR), is one of the 18 railway zones of the Indian Railways. It is headquartered in Maligaon, Guwahati in the state of Assam, and is responsible for the operation and expansion of the rail network all across Northeastern states and some districts of eastern Bihar and northern West Bengal. The departmental set up at the headquarters level and divisional set up in the field assists the General Manager in running the railways. Various departments namely engineering, mechanical, electrical, signal & telecom, operations, commercial, safety, accounts, security, personal, and medical are headed by a Senior Administrative Grade / Higher Administrative Grade officer, providing technical and operational support to the divisions in train operations. Another division is being to be set up in Silchar by bifurcating the Lumding division. Northeast Frontier Railway Invites Tenders for the Structure Bond and Earthing for Continuous Steel Fencing Between Existing track and Construction track structure bond and e art hing for continuous steel fencing between existing track and construction track in track doubling work under rangiya division in connection with track doubling work of nbq-agt via rny (dl) project", "image_url": "https://assets.sentinelassam.com/h-upload/2022/02/09/500x300_310112-310030-nfr-logo.jpg", "source_id": "sentinel", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Voices from the cubicle and the cabin", "link": "https://www.thehindu.com/education/careers/voices-from-the-cubicle-and-the-cabin/article38401429.ece", "keywords": null, "creator": ["Liffy Thomas"], "video_url": null, "description": "In a hybrid work model, the manager has a lot on his plate", "content": null, "pubDate": "2022-02-09 08:42:09", "image_url": null, "source_id": "thehindu", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Actor Vijay’s Makkal Iyakam will contest Tamil Nadu urban local body civic polls alone", "link": "https://www.indiatoday.in/india/story/actor-vijay-makkal-iyakam-will-contest-tamil-nadu-urban-local-body-civic-polls-alone-1910779-2022-02-09?utm_source=rss", "keywords": null, "creator": null, "video_url": null, "description": "Actor Vijay’s Makkal Iyakam will contest Tamil Nadu urban local body civic polls alone", "content": null, "pubDate": "2022-02-09 08:41:48", "image_url": null, "source_id": "indiatoday", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Hrithik Roshan loves Sussanne Khan's shorts, leaves adorable comment on her gym video", "link": "https://www.indiatoday.in/movies/celebrities/story/hrithik-roshan-loves-sussanne-khan-s-shorts-leaves-adorable-comment-on-her-gym-video-1910749-2022-02-09?utm_source=rss", "keywords": null, "creator": null, "video_url": null, "description": "Hrithik Roshan loves Sussanne Khan's shorts, leaves adorable comment on her gym video", "content": null, "pubDate": "2022-02-09 08:40:53", "image_url": null, "source_id": "indiatoday", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "ICICIdirect faces investors' ire over 'unprecedented network issue'", "link": "https://www.business-standard.com/article/markets/icicidirect-faces-investors-ire-over-unprecedented-network-issue-122020900756_1.html", "keywords": null, "creator": null, "video_url": null, "description": "The services were impacted till about 9.50 am as several users were unable to login. The issue was resolved before 10 am and full functionality was restored", "content": null, "pubDate": "2022-02-09 08:39:33", "image_url": null, "source_id": "business-standard", "country": ["india"], "category": ["top"], "language": "english" }, { "title": "Soon, Science centre in Patna will have digitised gallery", "link": "https://www.indiatoday.in/cities/patna/story/soon-science-centre-in-patna-will-have-digitised-gallery-1910780-2022-02-09?utm_source=rss", "keywords": null, "creator": null, "video_url": null, "description": "Soon, Science centre in Patna will have digitised gallery", "content": null, "pubDate": "2022-02-09 08:39:05", "image_url": null, "source_id": "indiatoday", "country": ["india"], "category": ["top"], "language": "english" }], "nextPage": 1 }),
            arti_cles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            matches: window.matchMedia("(min-width: 768px)").matches
        };
    }

    fetchMoreData = async () => {
        // pub_4435ceb56cbfde79ba7e7aef689705fd61ed
        this.setState({ loading: true, page: this.state.page + 1 });
        let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults,
        });
    };

    updateData = async () => {
        this.setState({ loading: true });
        let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        console.log(url)
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults,
        });
        document.title = `${this.props.category === "top" ? "Home" : this.props.category} - NewsMonkey`;
    };

    async componentDidMount() {
        this.updateData();
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 960px)").addListener(handler);
    }


    render() {
        console.log(typeof this.state.articles[0].results);
        return (
            <div className={`container-fluid p-0 text-${this.props.Theme === "dark" ? "light" : "dark"} row mx-0`} style={{ marginTop: "4em" }}>
                <h1 className="text-left mb-3">NewsMonkey - Top {this.props.category === "top" ? "" : this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                    <div className="row">
                        <div className="newsDiv col-xl-8 col-sm-12 row">
                            {this.state.articles[0].results.map((element) => {
                                return (
                                    <div
                                        className="my-1 mx-auto"
                                        key={element.url}
                                    >
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 91) + (element.title.length < 91 ? "" : "...") : "Sorry, Title not available right now."}
                                            description={element.description ? element.description : "Sorry, Description not available right now."}
                                            imgUrl={element.urlToImage ? element.urlToImage : "https://www.macworld.com/wp-content/uploads/2021/03/itunesguylarg-100001724-orig-112.jpg"}
                                            newsUrl={element.url}
                                            author={element.author}
                                            sourceName={element.source_id}
                                            Theme={this.props.Theme}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={"sideDiv col-xl-4"}>
                            <WeatherCard Theme={this.props.Theme} />
                            <CryptoTable Theme={this.props.Theme} />
                            <div className="fakeAds h-100"><h1>Advertisments</h1></div>
                        </div>
                    </div>
            </div >
        );
    }
}