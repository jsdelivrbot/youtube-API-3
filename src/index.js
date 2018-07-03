import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
//===============================================================================
const APIyoutube = 'AIzaSyAGEmxA2h94d4QUjD8zyWafvQPPVN3qER0';

class App extends React.Component {
    constructor(props){
        super(props)
        
        this.state = { videos:[], selectedVideo:null }
        
        this.videoSerach("react")
    }
    videoSerach(term){
        YTSearch({key:APIyoutube,term:term},(clips) => {
            this.setState({ videos: clips, selectedVideo: clips[0] });
        })
    }
    render(){
        return (<div>
            <SearchBar onSearchTermChange={(term) => this.videoSerach(term)}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
             onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
             videos={this.state.videos} />

        </div>); 
    }   
};
//===============================================================================
ReactDOM.render(<App />,document.querySelector('.container'))