import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import * as _ from 'lodash';
import '../../../scss/components/components/home.scss'



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories : {
            "videos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            "photos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
          }
       }
    }


    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
      }
    
    onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
      }

    createConversationUI(){

      return this.state.categories['videos'].map((item, i) =>{
         return <div class='square-box'>
        <div class='square-content'>
          <div>
            {console.log(item)}
            <span>{item}</span>
          </div>
        </div>
      </div>
      })
    }

    render() {
      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 5
        },
        1024: {
          items: 10
        }
      };
        return (
            <div class="home">
              <br/>
              <br/>
              <div class="category-name"><h1>videos</h1></div>
              <br/>
              <AliceCarousel
              duration={400}
              autoPlay={false}
              startIndex = {1}
              fadeOutAnimation={true}
              mouseDragEnabled={false}
              playButtonEnabled={false}
              responsive={responsive}
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
              infinite={false}
              mouseTrackingEnabled={false}
              dotsDisabled = {true}
              buttonsDisabled = {true}
              swipeDisabled = {true}
            >
              {this.createConversationUI()}
              {/* // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span>1</span>
              //     </div>
              //   </div>
              // </div>
              // <div class='square-box'>
              //   <div class='square-content'>
              //     <div>
              //       <span><button>Show More</button></span>
              //     </div>
              //   </div>
              // </div> */}
            </AliceCarousel>
          </div>
        )
    }
}


