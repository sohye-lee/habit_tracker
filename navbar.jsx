import React, { Component } from 'react'

class Navbar extends Component {
    
    render () {
        const navbarCount = this.props.habits.filter(habit => habit.count>0).length;
        return (
            <div>
                <nav className="navbar">
                    {/* <i class="fas fa-star-of-life logo"></i> */}
                     Habit Tracker
                    <span className="navbar__count">{navbarCount}</span>
                </nav>
            </div>
        )
    }
}

export default Navbar;