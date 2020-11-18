import React, {Component} from 'react'
import { render } from 'react-dom'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import EvenAndOdd from '../Topics/EvenAndOdd'
import Sum from '../Topics/Sum'
import FilterObject from '../Topics/FilterObject'

class TopicBrowser extends Component {
   render(){
    return (
        <div>
            <EvenAndOdd/>
            <FilterObject/>
            <FilterString/>
            <Palindrome/>
            <Sum/>
        </div>
    )
    }
}

export default TopicBrowser