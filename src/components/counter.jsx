import React, { Component } from 'react';

class Counter extends Component {

    getBadgeClasses(){
        let classes = "badge badge-";
        classes +=  this.props.counter.value === 0 ? "primary" : "secondary";
        return classes;
    }

    formatValue(){
        const { value } = this.props.counter
        return value === 0? "Zero": value;
    }

    // renderTags(){
    //     if (this.props.counter.value === 0)
    //         return (<p>This is no tag!</p>)
    //     return <ul>{ this.props.counter.tags.map(tag => <li>{ tag }</li>) }</ul>
    // }
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{ this.formatValue() }</span>
                <button 
                className='btn-increment' 
                onClick={() => this.props.onIncrement(this.props.counter) }>
                    Increment
                </button>
                <button
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className='btn-delete'
                >
                    Delete
                </button>
                {/* <div>
                    {this.props.counter.value === 0 && "Create new tag"}
                    {this.renderTags()}
                </div> */}
 
            </div>
        );
    }
}
 
export default Counter;