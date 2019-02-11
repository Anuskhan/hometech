import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
// import {Button} from 'react-toolbox/lib/button';
import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux";
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
           edit:true,
        }
    }
componentWillMount(){
    axios.get("https://greencommunitylaundry.herokuapp.com/api/products").
    then((succ) => {
      console.log(succ, "succ")
    //   this.setState({
    //     data: succ.data
    //   })
    //   console.log(this.state.data)
    }).
    catch((err) => { console.log(err, "err") })
  }
// }

    render() {
      
        return (
            <div>
            <Card style={{width: '350px',border:'1 solid black'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle here"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>hello</CardText>
    <CardActions >
      {/* <Button label="Action 1" />
      <Button label="Action 2" /> */}
    </CardActions>
  </Card>
            </div>
        
        )
    }
}

function mapStateToProp(state){
  console.log(state,"storestate");

  return({
  })
}
// function mapDispatchToProp(dispatch){
// changeRecUID:()=>{
//   dispatch(());
// }
// }
export default connect(null,mapStateToProp)(Main);

